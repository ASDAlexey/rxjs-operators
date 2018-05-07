import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import { tap, delay, delayWhen } from 'rxjs/operators';

/*
Observable.of(42)
  .pipe(
    tap((e) => console.log('Something')),
    delay(1200),
    tap((e) => console.log('Something 2')),
    delay(2000),
  )
  .subscribe((e) => {
    console.log(e);
  });
*/

console.log('Starting');
Observable.range(1, 9)
  .pipe(
    delayWhen((n) => Observable.timer(n * 1000))
  )
  .subscribe((e) => {
    console.log(e);
  });
