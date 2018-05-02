import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

Observable.of(
  1, 2, 3, 'Four', 5, [], {}, [1, 2, 3]
).subscribe((a) => console.log(a));
