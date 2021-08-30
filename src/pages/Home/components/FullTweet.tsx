import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet'
import { fetchTweet, setTweetData } from '../../../store/ducks/tweet/actionCreatores'
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors'
import { useHomeStyle } from '../theme'

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyle();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const params: { id?: string } = useParams();
  const isLoading = useSelector(selectIsTweetLoading);
  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id));
    }
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [id, dispatch]);



  if (isLoading) {
    return <CircularProgress />;
  }
  if (tweetData) {
    return <Tweet {...tweetData} classes={classes} />;
  }

  return null;
};
