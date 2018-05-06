import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { tap } from 'rxjs/operators/tap';
import { every } from 'rxjs/operators/every';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';

const range = Observable.interval(100)
  .pipe(
    take(100),
    tap(n => console.log('Value::', n)),
    map(n => n * 2),
    every(n => n % 2 === 0),
  )
  .subscribe((e) => console.log(e));
