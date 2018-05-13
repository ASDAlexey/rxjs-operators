import { range } from 'rxjs/observable/range';
import { filter, partition, map } from 'rxjs/operators';

// range(1, 20)
//   .pipe(filter((n) => n % 2 === 0))
//   .subscribe((e) => console.log(e));

const [even, odds] = range(1, 20)
  .pipe(partition((n) => n % 2 === 0));

even.subscribe((e) => console.log('Even: ' + e));

odds.pipe(map((n) => `Odd: ${n}`))
    .subscribe((e) => console.log(e));
