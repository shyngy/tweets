import React from "react";
import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { useHomeStyle } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreatores";
import { selectIsTweetsLoading, selectTweetsItems } from "../../store/ducks/tweets/selectors";
import { fetchTags } from "../../store/ducks/tags/actionCreatores";
import { Tags } from "../../components/Tags";
import { Route } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { FullTweet } from "./components/FullTweet";

//material-ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";


export const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);
  const classes = useHomeStyle();

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={3} style={{ padding: "5px 1vw" }}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6} style={{ padding: 0 }}>
          <Paper variant="outlined" className={classes.mainSection}>
            <Paper className={classes.mainHeader} variant="outlined">
              <Route path='/home/:any'>
                <BackButton />
              </Route>
              <Route path={['/home', '/', '/home/search']} exact>
                <Typography variant="h4">твиты</Typography>
              </Route>
              <Route path='/home/tweet' >
                <Typography variant="h4">твитнуть</Typography>
              </Route>
            </Paper>
            <Route path={['/home', '/home/search', '/']} exact >
              <Paper className={classes.mainSectionLiner} variant="outlined">
                <AddTweetForm classes={classes} />
              </Paper>
            </Route>
            <Route path={['/home', '/']} exact >
              {isLoading ? <CircularProgress /> : tweets.map((tweet) => <Tweet
                key={tweet._id}
                {...tweet}
                classes={classes} />)}
            </Route>
            <Route path="/home/tweet/:id" component={FullTweet} />
          </Paper>
        </Grid>

        <Grid item xs={3} className={classes.searchSection} >
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />



            <Tags classes={classes} />

            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar

                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>)
};


