import { Action } from "redux";
import { LoadingState, Tweet, TweetsState } from "./contracts/state";

export enum TweetsActionType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
  ADD_TWEET="tweets/ADD_TWEET",
  FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",

}


// the interface


export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS;
  payload: TweetsState["items"];
};
export interface AddTweetActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.ADD_TWEET;
  payload: Tweet;
};
export interface FetchAddTweetActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_ADD_TWEET;
  payload: string;
};
export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS;
};

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE;
  payload: LoadingState
};


// actions

export const setTweets = (payload: TweetsState["items"]): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionType.ADD_TWEET,
  payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionType.FETCH_ADD_TWEET,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload,
});

export type TweetsAction =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface;