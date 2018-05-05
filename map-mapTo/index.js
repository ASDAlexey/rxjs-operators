import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import { map } from 'rxjs/operators/map';
import { mapTo } from 'rxjs/operators/mapTo';

const range = Observable.range(1, 9);

range
  .pipe(map(n => n * n))
  .subscribe((a) => console.log(a));


const notificationInterval = Observable.interval(1000);

notificationInterval.pipe(
  mapTo({ type: 'Notification_arrived' }),
).subscribe((a) => console.log(a));
