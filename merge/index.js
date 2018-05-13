import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { map, merge, mergeAll, mergeMap } from 'rxjs/operators';

const bluePostFeed = interval(1000).pipe(map((n) => `Blue post Aticle #${n}`));
const redHeraldFeed = interval(650).pipe(map((n) => `Red Herald Aticle #${n}`));
const greenTribuneFeed = interval(1650).pipe(map((n) => `Green trebune Aticle #${n}`));

// bluePostFeed
//   .pipe(merge(redHeraldFeed))
//   .subscribe((e) => console.log(e));

// of(bluePostFeed, redHeraldFeed, greenTribuneFeed)
//   .pipe(mergeAll())
//   .subscribe((e) => console.log(e));

const config = { blue: bluePostFeed, red: redHeraldFeed, green: greenTribuneFeed };
const colors = ['blue', 'red', 'green'];

from(colors)
  .pipe(mergeMap(color => config[color]))
  .subscribe((e) => console.log(e));
