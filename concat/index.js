import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import { concat, skip, take, map } from 'rxjs/operators';

Observable
// .range(1, 9)
  .interval(100)
  .pipe(
    take(20),
    concat(
      // Observable.range(1, 20)),
      Observable
      // .range(1, 20))
        .interval(100)
        .pipe(
          map(n => '#2 ' + n),
          skip(10),
        )
    )
  )
  .subscribe((a) => console.log(a));
