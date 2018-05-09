// import { take, concatAll } from 'rxjs/operators';
// import { interval } from 'rxjs/observable/interval';
// import { of } from 'rxjs/observable/of';
//
// const obs1 = interval(1000).pipe(take(5));
// const obs2 = interval(500).pipe(take(2));
// const obs3 = interval(2000).pipe(take(1));
// //emit three observables
// const source = of(obs1, obs2, obs3);
// //subscribe to each inner observable in order when previous completes
// const example = source.pipe(concatAll());
// /*
//   output: 0,1,2,3,4,0,1,0
//   How it works...
//   Subscribes to each inner observable and emit values, when complete subscribe to next
//   obs1: 0,1,2,3,4 (complete)
//   obs2: 0,1 (complete)
//   obs3: 0 (complete)
// */
//
// const subscribe = example.subscribe(val => console.log(val));

import { take, concatAll } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { range } from 'rxjs/observable/range';
import { fromStdIn } from '../utility';

const obs1 = range(1, 3);
const obs2 = interval(100).pipe(take(5));
const obs3 = fromStdIn();
//emit three observables
const source = of(obs1, obs2, obs3);
//subscribe to each inner observable in order when previous completes
const example = source.pipe(concatAll());
/*
  output: 0,1,2,3,4,0,1,0
  How it works...
  Subscribes to each inner observable and emit values, when complete subscribe to next
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/

const subscribe = example.subscribe(val => console.log(val));
