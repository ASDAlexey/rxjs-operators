import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import { filter } from 'rxjs/operators/filter';

const range = Observable.range(1, 9)
  .pipe(filter((n) => n % 2 === 0))
  .subscribe((a) => console.log(a));
