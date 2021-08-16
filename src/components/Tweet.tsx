import { Avatar,  Grid, IconButton,  Paper, Typography } from "@material-ui/core";
import React from "react";
import classNames from "classnames";
import ReplyIcon from '@material-ui/icons/Reply';
import CommentsIcon from '@material-ui/icons/ChatBubbleOutline';
import RepostIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import { useHomeStyle } from "../pages/Home";


interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyle>;
  user: {
    fullName: string;
    username: string;
    avatarUrl: string
  }
}
export const Tweet: React.FC<TweetProps> = ({ classes, user, text }: TweetProps): React.ReactElement => {


  return (
    <Paper variant="outlined" className={classNames(classes.mainSectionLiner, classes.tweet)}>
      <Grid container spacing={1}>
        <Grid item xl={1}>
          <Avatar src={user.avatarUrl} alt={user.username} />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <strong className={classes.fullName}>{user.fullName}</strong>&nbsp;
            <span className={classes.userName}>{user.username}&nbsp;</span>
            <span className={classes.userName}>&middot; 1 ч</span>
          </Typography>
          <Typography className={classes.userPostText} variant="body2">
            {text}
          </Typography>
          <article className={classes.userPostFooter}>
            <div>
              <IconButton color="primary">
                <CommentsIcon className={classes.userPostBottom} />
              </IconButton>
              <span className={classes.iconCounts}>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RepostIcon className={classes.userPostBottom} />
              </IconButton>
              <span className={classes.iconCounts}>1</span>
            </div>

            <div>
              <IconButton color="primary">
                <LikeIcon className={classes.userPostBottom} />
              </IconButton>
              <span className={classes.iconCounts}>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <ReplyIcon className={classes.userPostBottom} />
              </IconButton>
              <span className={classes.iconCounts}>1</span>
            </div>
          </article>


        </Grid>
      </Grid>
    </Paper>
  )
}