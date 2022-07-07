import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import Alert from "@material-ui/lab/Alert";

import { useHomeStyles } from "../pages/Home/theme";
import { fetchNewTweet } from "../store/ducks/tweets/actionCreators";
import { selectAddTweetState } from "../store/ducks/tweets/selectors";
import { AddTweetState } from "../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  // useState
  const [text, setText] = useState<string>("");
  const addTweetState = useSelector(selectAddTweetState);
  // useDispatch
  const dispatch = useDispatch();

  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextare = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchNewTweet(text));
    setText("");
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <TextareaAutosize
          onChange={handleChangeTextare}
          className={classes.addFormTextarea}
          placeholder="What's happening?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: "red" } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="static"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={
              addTweetState === AddTweetState.LOADING ||
              !text ||
              text.length >= MAX_LENGTH
            }
            color="primary"
            variant="contained"
          >
            {addTweetState === AddTweetState.LOADING ? (
              <CircularProgress />
            ) : (
              "Tweet"
            )}
          </Button>
        </div>
      </div>
      {addTweetState === AddTweetState.ERROR && (
        <Alert severity="error">Network Error</Alert>
      )}
    </div>
  );
};
