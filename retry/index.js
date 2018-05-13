import { interval } from 'rxjs/observable/interval';
import { _throw } from 'rxjs/observable/throw';
import { retry, mergeMap } from 'rxjs/operators';

const buggyAPI = interval(1000).pipe(
  mergeMap(val => {
    //throw error for demonstration
    if (val > 5) {
      return _throw('Error!');
    }
    return of(val);
  }),
  retry(3),
);

const subscribe = buggyAPI.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: Retried 3 times then quit!`)
});
