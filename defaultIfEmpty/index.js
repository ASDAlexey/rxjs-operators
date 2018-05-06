import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { defaultIfEmpty } from 'rxjs/operators/defaultIfEmpty';

Observable
  .empty()
  .pipe(
    defaultIfEmpty(42)
  )
  .subscribe((a) => console.log('Where\'s the value', a));
