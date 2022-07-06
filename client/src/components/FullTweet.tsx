import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { useHomeStyles } from "../pages/Home/theme";
import {
  selectIsTweetLoading,
  selectTweetdata,
} from "../store/ducks/tweet/selectors";
import { fetchTweet, setTweet } from "../store/ducks/tweet/actionCreators";
import { useParams } from "react-router-dom";
import { Tweet } from "./Tweet";

const FullTweet: React.FC = (): React.ReactElement => {
  const params: { id: string } = useParams();
  const id = params.id;
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetdata);
  const isLoading = useSelector(selectIsTweetLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id));
    }
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, id]);

  return (
    <div>
      {isLoading ? (
        <div className={classes.tweetsCentred}>
          <CircularProgress />
        </div>
      ) : tweetData ? (
        <Tweet classes={classes} {...tweetData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FullTweet;
