import { createSelector } from "reselect";
import { RootState } from "../../store";
import { AddTweetState, LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;

export const selectAddTweetState = (state: RootState): AddTweetState =>
  selectTweets(state).addTweetState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);
