import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetdata = createSelector(
  selectTweet,
  (tweet) => tweet.data
);
