import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import 'rxjs/add/observable/from';

const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21];
const fibonacciPromise = new Promise((resolve) => resolve(fibonacciArray));

function* fibonacciGenerator() {
  let a = 1;
  let b = 1;

  while (true) {
    let c = a + b;
    yield c;
    a = b;
    b = c;
  }
}

Observable.from(
  // fibonacciArray,
  // fibonacciPromise,
  fibonacciGenerator(),
  )
  .pipe(
    take(20)
  )
  .subscribe((a) => {
    console.log(a);
  });
