import { interval } from 'rxjs/observable/interval';
import { range } from 'rxjs/observable/range';
import { concatMap } from 'rxjs/operators/concatMap';
import { concatMapTo } from 'rxjs/operators/concatMapTo';

interval(100)
// .pipe(map(n => `Range #${n}`))
//   .pipe(concatMap(n => range(0, 2)))
  .pipe(concatMap(n => range(0, n + 1)))
  // .pipe(concatMapTo(range(0, 2)))
  .subscribe((e) => console.log(e));
