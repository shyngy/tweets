import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetLoadingStateActionInterface
} from "./contracts/actionTypes";
import { LoadingState, TweetState } from "./contracts/state";

export enum TweetActionType {
  SET_TWEET_DATA = "tweet/SET_TWEET_DATA",
  FETCH_TWEET_DATA = "tweet/FETCH_TWEET_DATA",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

// actions

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionType.SET_TWEET_DATA,
  payload
});

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
  type: TweetActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTweet = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionType.FETCH_TWEET_DATA,
  payload
});
export type TweetAction =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateActionInterface;