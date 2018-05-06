import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { first } from 'rxjs/operators/first';

Observable.interval(100)
  .pipe(
    first(n => n === 3),
  ).subscribe((a) => console.log(a));
