import { Action } from "redux";
import { AddTweetState, LoadingState, Tweet, TweetsState } from "./state";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
  FETCH_NEW_TWEET = "tweets/FETCH_NEW_TWEET",
  ADD_NEW_TWEET = "tweets/ADD_NEW_TWEET",
  SET_ADD_NEW_TWEET_STATE = "tweets/SET_ADD_NEW_TWEET_STATE",
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState["items"];
}

export interface SetAddTweetStateActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ADD_NEW_TWEET_STATE;
  payload: AddTweetState;
}

export interface FetchNewTweetActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_NEW_TWEET;
  payload: string;
}

export interface AddNewTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_NEW_TWEET;
  payload: Tweet;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
