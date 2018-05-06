import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { map } from 'rxjs/operators/map';
import { pluck } from 'rxjs/operators/pluck';

const friendsAPI = Observable.interval(1000)
  .pipe(
    map((i) => ({ name: `Friend ${i}`, mutualFriends: 2 * i + 1 })),
    pluck('mutualFriends'),
  )
  .subscribe((a) => console.log(a));
