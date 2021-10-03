import { put,  takeLatest } from "@redux-saga/core/effects";
import { call } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { addTweet,  FetchAddTweetActionInterface, setTweets, setTweetsLoadingState, TweetsActionType } from "./actionCreatores";
import { LoadingState, Tweet } from "./contracts/state";


export function* fetchTweetsRequest(): Generator<unknown, void, Tweet[]> {

  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));

  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));

  }

};

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): Generator<unknown, void, Tweet> {

  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: "Dickerson Mcleod",
        username: "kirk",
        avatarUrl: "https://source.unsplash.com/random/100x100?3"
      }
    }
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));

  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));

  }

};

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest);
};