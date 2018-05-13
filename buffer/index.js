import { fromStdIn } from '../utility'
import { timer } from 'rxjs/observable/timer'
import { buffer, filter, bufferCount, bufferTime, bufferToggle, bufferWhen } from 'rxjs/operators'

fromStdIn()
  .pipe(
    // buffer(fromStdIn().pipe(filter((key) => key === 'p'))),
    // bufferCount(10),
    // bufferTime(1000),
    // bufferToggle(
    //   fromStdIn().pipe(filter((key) => key === 'p')),
    //   () => fromStdIn().pipe(filter((key) => key === 'o'))
    // ),
    bufferWhen(
      () => timer(1000)
    )
  )
  .subscribe((e) => console.log(e));
