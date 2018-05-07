import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import { last, take } from 'rxjs/operators';

console.log('Can enter keybord first 2 seconds');
Observable
// .range(1, 9)
  .interval(100)
  .pipe(
    take(10),
    last(n => n % 2 === 0),
  )
  .subscribe((k) => console.log(k));
