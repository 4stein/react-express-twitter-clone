import {
  AddNewTweetActionInterface,
  FetchNewTweetActionInterface,
  FetchTweetsActionInterface,
  SetAddTweetStateActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import {
  AddTweetState,
  LoadingState,
  Tweet,
  TweetsState,
} from "./contracts/state";



export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchNewTweet = (
  payload: string
): FetchNewTweetActionInterface => ({
  type: TweetsActionsType.FETCH_NEW_TWEET,
  payload,
});

export const addNewTweet = (payload: Tweet): AddNewTweetActionInterface => ({
  type: TweetsActionsType.ADD_NEW_TWEET,
  payload,
});

export const setAddTweetState = (
  payload: AddTweetState
): SetAddTweetStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_NEW_TWEET_STATE,
  payload,
});



export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchNewTweetActionInterface
  | AddNewTweetActionInterface
  | SetAddTweetStateActionInterface;
