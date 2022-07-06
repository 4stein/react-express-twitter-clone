import React from "react";
import { Paper, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import { useHomeStyles } from "../pages/Home/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../store/ducks/tags/actionCreators";
import {
  selectIsTagsLoading,
  selectTagsItems,
} from "../store/ducks/tags/selectors";
import { Link } from "react-router-dom";

export const Tags = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tags = useSelector(selectTagsItems);
  const isLoading = useSelector(selectIsTagsLoading);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Topics</b>
      </Paper>
      <List>
        {isLoading ? (
          <div className={classes.tweetsCentred}>
            <CircularProgress />
          </div>
        ) : (
          tags.map((tag) => (
            <ListItem key={tag._id} className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${tag.name}`}>
                <ListItemText
                  primary={`${tag.name}`}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Tweets: {tag.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
};
