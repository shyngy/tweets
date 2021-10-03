import React from "react"
import { useHomeStyle } from "../pages/Home/theme";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import classNames from "classnames";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import {useDispatch} from "react-redux"
import { fetchAddTweet } from "../store/ducks/tweets/actionCreatores";

interface AddTweetFormI {
  classes: ReturnType<typeof useHomeStyle>;
};


export const AddTweetForm: React.FC<AddTweetFormI> = ({
  classes
}: AddTweetFormI): React.ReactElement => {

  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>("");
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = 280 - text.length;

  const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleButtonClick = (): void => {
    setText("");
    dispatch(fetchAddTweet(text))
  };

  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.userAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <TextareaAutosize

          onChange={handleChangeTextare}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={20}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
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
                  thickness={4}
                  value={text.length >= 280 ? 100 : textLimitPercent}
                  style={text.length >= 280 ? { color: "red" } : undefined}
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
            onClick={handleButtonClick}
            disabled={text.length >= 280}
            color="primary"
            variant="contained">
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
}
