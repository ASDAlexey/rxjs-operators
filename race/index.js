import { timer } from 'rxjs/observable/timer';
import { race } from 'rxjs/observable/race';
import { map } from 'rxjs/operators/map';

const apiA = timer(1500, 100).pipe(map((n) => `API A => #${n}`));
const apiB = timer(2000, 100).pipe(map((n) => `API B => #${n}`));

race(apiA, apiB).subscribe((e) => console.log(e));
