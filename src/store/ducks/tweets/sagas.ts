import { put, takeEvery } from "@redux-saga/core/effects";
import { call } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweets, setTweetsLoadingState, TweetsActionType } from "./actionCreatores";
import { LoadingState } from "./contracts/state";


export function* fetchTweetsRequest() {
  
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));

  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
    
  }
  
};

export function* tweetsSaga(){
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
};