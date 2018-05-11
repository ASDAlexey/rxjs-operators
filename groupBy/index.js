import { range } from 'rxjs/observable/range';
import { groupBy } from 'rxjs/operators/groupBy';
import { mergeMap } from 'rxjs/operators/mergeMap';

range(1, 20)
  .pipe(
    groupBy(n => n % 2 === 0),
    mergeMap(nGroup => nGroup.toArray())
  )
  .subscribe((e) => console.log(e));
