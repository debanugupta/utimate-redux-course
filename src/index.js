import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

console.log(store);

// notify subscribers
const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
  });

// store.dispatch (bugAdded("Bug 1"));
// store.dispatch (bugAdded("Bug 2"));
// store.dispatch (bugAdded("Bug 3"));
// store.dispatch (bugResolved(1));
// store.dispatch (bugRemoved(1));

unsubscribe();

console.log(store.getState());
