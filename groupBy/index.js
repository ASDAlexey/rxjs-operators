import { range } from 'rxjs/observable/range';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

// https://www.learnrxjs.io/operators/transformation/groupby.html
range(1, 20)
  .pipe(
    groupBy(n => n % 2 === 0),
    mergeMap(group => group.pipe(toArray()))
  )
  .subscribe((e) => console.log(e));
