import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import rootSaga from './saga';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TagsState } from './ducks/tags/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
};
const REDUX_DEV = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = (typeof window !== "undefined" && REDUX_DEV) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet: TweetState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

