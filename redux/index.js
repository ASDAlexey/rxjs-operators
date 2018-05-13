import { scan, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const createStore = (reducer, preloadedState) => {
  const eventSource = new BehaviorSubject(preloadedState);
  const scanned = eventSource.pipe(
    scan(reducer),
    distinctUntilChanged(),
  );

  return {
    dispatch(action) {
      eventSource.next();
    },

    subscribe(listener) {
      scanned.subscribe(listener);
    },
  }
};
