import { single } from 'rxjs/operators/single';
import { range } from 'rxjs/observable/range';

range(0, 2) // 0,1
  .pipe(single(n => n % 2 === 0))
  .subscribe((e) => console.log(e)); // 0
