import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import {
  addNewTweet,
  setAddTweetState,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {
  FetchNewTweetActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { AddTweetState, LoadingState, Tweet } from "./contracts/state";

export function* fetchTweetsRequest() {
  try {
    const items: Tweet[] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest({ payload }: FetchNewTweetActionInterface) {
  try {
    const newTweet = {
      id: new Date().getTime().toString(),
      _id: new Date().getTime().toString(),
      text: payload,
      user: {
        fullname: "Mike Doruchenko",
        username: "4stein",
        avatarUrl:
          "https://scontent.fiev24-1.fna.fbcdn.net/v/t39.30808-1/244697508_1886106798217814_8643688549211563206_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=D6uyB7rPzGIAX_CHajy&_nc_ht=scontent.fiev24-1.fna&oh=00_AT-qqOJ3ArR-vLYyivVF1NLDQ2i5tiNJr_Bfucuew97hHw&oe=62C8ACFA",
      },
    };
    const tweet: Tweet = yield call(TweetsApi.addTweet, newTweet);
    yield put(addNewTweet(tweet));
  } catch (error) {
    yield put(setAddTweetState(AddTweetState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_NEW_TWEET, addTweetRequest);
}
