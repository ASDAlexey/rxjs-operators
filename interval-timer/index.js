import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

// const ticker = Observable.interval(2000);
// ticker.subscribe((a) => console.log('A', a));
// setTimeout(() => (ticker.subscribe((a) => console.log('B', a))), 1000);

const stopWatch = Observable.timer(2000, 1000);
stopWatch.subscribe((a) => console.log('A', a));
