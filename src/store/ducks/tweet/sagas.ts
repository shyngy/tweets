
import { put, takeEvery,  } from "@redux-saga/core/effects";
import { call } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";

import { setTweetData, setTweetLoadingState } from "./actionCreatores";
import { FetchTweetDataActionInterface, TweetActionType } from "./contracts/actionTypes";
import { LoadingState } from "./contracts/state";



export function* fetchTweetDataRequest({payload: TweetId}: 
  FetchTweetDataActionInterface){
  try {
    const data = yield call(TweetsApi.fetchTweetData, TweetId);
    yield put(setTweetData(data[0]));

  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR)); 
  }
};


export function* tweetSaga(){
  yield takeEvery(TweetActionType.FETCH_TWEET_DATA, fetchTweetDataRequest);
};