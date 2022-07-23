import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { walletReducer, GlobalWalletState } from './reducers/walletReducer';

export interface GlobalStateFull {
  wallet: GlobalWalletState;
}

const rootReducer = combineReducers<GlobalStateFull>({
  wallet: walletReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
