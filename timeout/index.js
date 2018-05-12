import { timeout, take } from 'rxjs/operators';
import { fromStdIn } from '../utility';

console.log('Please input your password quickly!!!');
// Через  сек после останвки нажания кнопок произойдет ошибка по timeout
// fromStdIn().pipe(timeout(2000))
//            .subscribe((e) => (console.log(e)));

// no error, becouse timeout is triggered on completed observable
fromStdIn()
  .pipe(
    take(10),
    timeout(2000),
  ).subscribe((e) => (console.log(e)));
