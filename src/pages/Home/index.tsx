import { Avatar, Button, Divider, Grid, InputAdornment,  List, ListItem, ListItemAvatar, ListItemText, Paper,  Typography,} from "@material-ui/core";

import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import classNames from "classnames";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { AddTweetForm } from "../../components/AddTweetForm";
import { useHomeStyle } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreatores";
import { selectIsTweetsLoading, selectTweetsItems } from "../../store/ducks/tweets/selectors";


export const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch()

  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading)
  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])
  const classes = useHomeStyle()

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={3} style={{ padding: "5px 1vw" }}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6} style={{ padding: 0 }}>
          <Paper variant="outlined" className={classes.mainSection}>
            <Paper className={classNames(classes.mainSectionLiner, classes.mainHeader)} variant="outlined">
              <Typography variant="h4">Главная</Typography>
            </Paper>
            <Paper className={classes.mainSectionLiner} variant="outlined">

              <AddTweetForm classes={classes} />


            </Paper>
            {isLoading ? <CircularProgress/> : tweets.map((tweet) => <Tweet 
              text={tweet.text} 
              key={tweet._id}
              user={tweet.user}
               classes={classes} />)}
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
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 163 122
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
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