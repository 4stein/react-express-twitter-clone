import produce, { Draft } from "immer";
import { TweetsActions } from "./actionCreators";
import { TweetsActionsType } from "./contracts/actionTypes";
import { AddTweetState, LoadingState, TweetsState } from "./contracts/state";

const initialTweetsState: TweetsState = {
  items: [],
  addTweetState: AddTweetState.NEVER,
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TweetsActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case TweetsActionsType.FETCH_NEW_TWEET:
        draft.addTweetState = AddTweetState.LOADING;
        break;

      case TweetsActionsType.SET_ADD_NEW_TWEET_STATE:
        draft.addTweetState = action.payload;
        break;

      case TweetsActionsType.ADD_NEW_TWEET:
        draft.items.splice(0, 0, action.payload);
        draft.addTweetState = AddTweetState.NEVER;
        break;

      default:
        break;
    }
  },
  initialTweetsState
);
