import { interval } from 'rxjs/observable/interval';
import { scan } from 'rxjs/operators/scan';
import { reduce } from 'rxjs/operators/reduce';
import { take } from 'rxjs/operators/take';

interval(200)
  .pipe(
    take(10),
    // reduce((acc, value) => acc + value, 0),
    scan((acc, value) => acc + value, 0),
  )
  .subscribe((a) => console.log(a));
