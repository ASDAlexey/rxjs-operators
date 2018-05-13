import { interval } from 'rxjs/observable/interval';
import { withLatestFrom } from 'rxjs/operators';
import { fromStdIn } from '../utility';

interval(1000)
  .pipe(withLatestFrom(fromStdIn()))
  .subscribe((e) => console.log(e));
