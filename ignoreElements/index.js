import { interval } from 'rxjs/observable/interval';
import { ignoreElements } from 'rxjs/operators/ignoreElements';
import { take } from 'rxjs/operators/take';
import { tap } from 'rxjs/operators/tap';

console.log('Interval\'s started');
interval(100)
  .pipe(
    take(20),
    ignoreElements(),
  )
  .subscribe({ next: (e) => console.log(e), complete: (a) => console.log('Completed') });
