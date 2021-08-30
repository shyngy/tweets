import produce, { Draft } from "immer";
import { TweetAction } from "./actionCreatores";
import { TweetActionType } from "./contracts/actionTypes";
import { LoadingState, TweetState } from "./contracts/state";


const initialTweetState:TweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER
};

export const tweetReducer = produce((draft:Draft<TweetState>, action:TweetAction) => {
  switch (action.type) {

    case TweetActionType.SET_TWEET_DATA:

      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetActionType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;
      
    case TweetActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
    
  }
}, initialTweetState);
