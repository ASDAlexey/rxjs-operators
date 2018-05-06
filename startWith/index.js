import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';

console.log('Made API request');
Observable.timer(4000, 500)
  .pipe(
    map(n => n + 1),
    startWith(10),
  ).subscribe((a) => console.log('API request completed: ', a));
