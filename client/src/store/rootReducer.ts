import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { tagsReducer } from "./ducks/tags/reducer";
import { TweetReducer } from "./ducks/tweet/reducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: TweetReducer,
  tags: tagsReducer,
});
