import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

const rangeObservable = Observable.range(0, 16);
rangeObservable.subscribe((e) => console.log(`Range emited ${e}`));

