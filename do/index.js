import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

const interval = Observable.interval(1000);

interval
  .pipe(
    map(n => n * n),
    tap((n) => console.log('N after Map#1::', n)),
    map(n => n / 3),
    tap((n) => console.log('N after Map#2::', n)),
    map(n => n * n * n),
    tap((n) => console.log('N after Map#3::', n)),
    map(n => n % 42),
  )
  .subscribe((a) => console.log(a));
