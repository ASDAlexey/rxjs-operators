import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { map, distinctUntilChanged } from 'rxjs/operators';

Observable.interval(100)
  .pipe(
    map(n => ~~(n / 10)), // ~~ - analog Math.floor https://jsperf.com/tilde-vs-floor
    distinctUntilChanged(),
  )
  .subscribe(e => console.log(e));
