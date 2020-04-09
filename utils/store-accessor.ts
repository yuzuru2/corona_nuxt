import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Home from '~/store/home';

/* eslint import/no-mutable-exports: 0 */
let HomeStore: Home;

function initialiseStores(store: Store<any>): void {
  HomeStore = getModule(Home, store);
}

export { initialiseStores, HomeStore };
