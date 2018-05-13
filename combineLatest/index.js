import { fromEvent } from 'rxjs/observable/fromEvent';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { mergeMap } from 'rxjs/operators/mergeMap';

const countryObservable = fromEvent(
  document.getElementById('country'),
  'change',
  (e) => e.target.value
);

const cityObservable = fromEvent(
  document.getElementById('city'),
  'change',
  (e) => e.target.value
);


// countryObservable.subscribe((e) => console.log(e));

combineLatest(countryObservable,cityObservable)
  .subscribe((e) => console.log(e));
