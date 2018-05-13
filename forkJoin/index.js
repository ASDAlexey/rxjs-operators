import { forkJoin } from 'rxjs/observable/forkJoin';
import { timer } from 'rxjs/observable/timer';
import { mapTo, concatAll } from 'rxjs/operators';

const friendAPI = timer(1000).pipe(mapTo({ name: 'Hank' }));
const preferencesAPI = timer(1700).pipe(
  mapTo([{ theme: 'Dark' },{ theme: 'Green' }]),
);

forkJoin(friendAPI, preferencesAPI).subscribe((e) => console.log(e));
