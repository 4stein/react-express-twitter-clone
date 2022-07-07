import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  CircularProgress,
  // IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
// import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
// import RepostIcon from "@material-ui/icons/RepeatOutlined";
// import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import ShareIcon from "@material-ui/icons/ReplyOutlined";
import { useHomeStyles } from "../pages/Home/theme";
import {
  selectIsTweetLoading,
  selectTweetdata,
} from "../store/ducks/tweet/selectors";
import { fetchTweet, setTweet } from "../store/ducks/tweet/actionCreators";
import { useParams } from "react-router-dom";
import classNames from "classnames";

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
        <Paper className={classes.fullTweet}>
          <div className={classNames(classes.tweetsHeaderUser)}>
            <Avatar
              className={classes.tweetAvatar}
              alt={`User Avatar ${tweetData.user.fullname}`}
              src={tweetData.user.avatarUrl}
            />
            <Typography>
              <b>{tweetData.user.fullname}</b>&nbsp;
              <div>
                <span className={classes.tweetUserName}>
                  @{tweetData.user.username}
                </span>
                &nbsp;
                <span className={classes.tweetUserName}>·</span>&nbsp;
                <span className={classes.tweetUserName}>1 ч</span>
              </div>
            </Typography>
          </div>
          <Typography className={classes.fullTweetText} gutterBottom>
            {tweetData.text}
          </Typography>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
};

export default FullTweet;
