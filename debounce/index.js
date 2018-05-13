import { timer } from 'rxjs/observable/timer';
import { debounce, debounceTime } from 'rxjs/operators';
import { fromStdIn } from '../utility';

fromStdIn()
  .pipe(
    // debounce(() => timer(1000)),
    debounceTime(1000),
  )
  .subscribe((e) => console.log(e));
