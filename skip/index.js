import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { skip, take, takeWhile, takeUntil } from 'rxjs/operators';
import { fromStdIn } from '../utility';

console.log('Can enter keybord first 2 seconds');
fromStdIn()
  .pipe(
    skip(10),
    // take(5),
    // takeWhile(v => v !== 'g'),
    takeUntil(Observable.timer(2000)),
  )
  .subscribe((k) => console.log(k));
