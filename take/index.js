import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/timer';
import { take, takeWhile, takeUntil } from 'rxjs/operators';

Observable
// .range(1, 9)
  .interval(100)
  .pipe(
    // take(5)
    // takeWhile(n => n < 7)
    takeUntil(Observable.timer(2000))
  )
  .subscribe((e) => console.log(e));
