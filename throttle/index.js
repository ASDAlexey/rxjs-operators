import { fromStdIn } from '../utility';
import { throttleTime, throttle, filter } from 'rxjs/operators'

fromStdIn()
  .pipe(
    // throttleTime(1000),
    throttle(() => fromStdIn().pipe(filter((key) => key === 'p'))),
  ).subscribe((e) => console.log(e));
