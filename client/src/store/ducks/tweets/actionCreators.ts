import { Action } from "redux";
import { TweetsState } from "./contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState["items"];
}

export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});
