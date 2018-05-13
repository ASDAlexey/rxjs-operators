import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators/map';

fromEvent(document.forms[0], 'submit').subscribe((e) => {
  e.preventDefault();
  console.log(e);
});

fromEvent(document.getElementById('animal'), 'change')
  .pipe(
    map(event => event.target.value)
  )
  .subscribe((e) => {
    console.log(e);
  });

fromEvent(document.getElementById('motto'), 'change')
  .pipe(
    map(event => event.target.value)
  )
  .subscribe((e) => {
    console.log(e);
  });
