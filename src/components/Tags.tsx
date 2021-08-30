import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHomeStyle } from "../pages/Home/theme";
import { selectTagsItems } from "../store/ducks/tags/selectors";
import { selectLoadingState } from "../store/ducks/tags/selectors";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyle>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoading = useSelector(selectLoadingState);
  if (!isLoading) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((items) =>
        (<ListItem key={items._id} className={classes.rightSideBlockItem}>
          <Link to={`/home/search?q=${items.name}`}>
            <ListItemText
              primary={items.name}
              secondary={
                <Typography component="span" variant="body2" color="textSecondary">
                  Твитов: {items.count}
                </Typography>
              }
            />
          </Link>
        </ListItem>)
        )}
        <Divider component="li" />
      </List>
    </Paper>
  );
};
