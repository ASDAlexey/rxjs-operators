import { interval } from 'rxjs/observable/interval';
import { sample } from 'rxjs/operators/sample';
import { fromStdIn } from '../utility';

fromStdIn()
  .pipe(
    sample(interval(1000))
  )
  .subscribe((a) => console.log(a));
