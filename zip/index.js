import { interval } from 'rxjs/observable/interval';
import { zip } from 'rxjs/observable/zip';
import { map } from 'rxjs/operators';

const slowNumberObservable = interval(100);
const slowSquareObservable = interval(350).pipe(map((n) => n ** 2));

// slowNumberObservable.subscribe((e)=>console.log(e));
// slowSquareObservable.subscribe((e)=>console.log(e));

zip(
  slowNumberObservable,
  slowSquareObservable
).subscribe((e) => console.log(e));
