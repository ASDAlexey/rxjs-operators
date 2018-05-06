import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const customObservable = Observable.create(observer => {
  observer.next(42);
  // observer.complete(108);
  setInterval(() => {
    observer.next('Floon');
  }, 500);

  setTimeout(() => {
    observer.complete();
  }, 2500);
});

customObservable.subscribe({
  next: (e) => console.log('Next', e),
  complete: (e) => console.log('Complete', e),
});
