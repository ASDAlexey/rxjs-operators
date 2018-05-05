import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

Observable.empty()
  .subscribe({
    complete: (a) => console.log('Complete', a),
    next: (a) => console.log('Emit', a)
  });
