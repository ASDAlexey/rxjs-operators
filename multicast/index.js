import { interval } from 'rxjs/observable/interval';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, tap, publish, share, multicast } from 'rxjs/operators';

const shared = new BehaviorSubject(-1);
const currencyTicker = interval(1000)
  .pipe(
    tap((e) => console.log('Pinged API')),
    map((n) => `Currency info #${n} - [placeholder]`),
    // publish() // ping api once and sharing the result at both wiget
    // share(), // like publisg but without connect
    multicast(shared),
  );

currencyTicker.subscribe((e) => console.log('Left widget', e));
currencyTicker.subscribe((e) => console.log('Right widget', e));
currencyTicker.connect(); // only with publish() and multicast()
