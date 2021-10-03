import React from "react";
import { useHomeStyle } from "../pages/Home/theme";
import { ModalBlock } from "./ModalBlock";
import { AddTweetForm } from "./AddTweetForm";

import FiberSmartRecordIcon from "@material-ui/icons/FiberSmartRecord";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import { Link } from "react-router-dom";


interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyle>;
}


export const SideMenu: React.FC<SideMenuProps> = (
  { classes }: SideMenuProps
): React.ReactElement => {

  const matches = useMediaQuery("(min-width:1050px)");

  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);
  const handleCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  const handleUpAddTweet = () => {
    setVisibleAddTweet(true);
  };

  return (

    <ul className={matches ? classes.sideMenuList : classes.menuAdaptive}>
      <li className={classes.sideMenuListLi}>
        <div>
          <Link to="/home">
            <FiberSmartRecordIcon style={{ width: 40, height: 40, margin: "3 5" }} className={classes.sideMenuListIcons} color="primary" />
          </Link>
        </div>

      </li>
      <li className={classes.sideMenuListLi}>
        <div>
          <SearchIcon className={classes.sideMenuListIcons} />
          <Typography variant="h6">Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListLi}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListIcons} />
          <Typography variant="h6">Уведомление</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListLi}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListIcons} />
          <Typography variant="h6">Сообщения</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListLi}>
        <div>
          <BookmarkBorderIcon className={classes.sideMenuListIcons} />
          <Typography variant="h6">Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListLi}>
        <div>
          <ListAltIcon className={classes.sideMenuListIcons} />
          <Typography variant="h6">Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListLi}>
        <div>
          <PersonOutlineIcon className={classes.sideMenuListIcons} />
          <Typography variant="h6">Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListLi}>
        {matches ? <Button className={classes.tweetButton}
          color="primary" variant="contained"
          fullWidth onClick={handleUpAddTweet}>Твитнуть</Button> : <BrushOutlinedIcon className={classes.sideMenuListIcons} />}
        <ModalBlock
          title={"title"}
          onClose={handleCloseAddTweet}
          visible={visibleAddTweet}>
          <div style={{ width: "500px" }}>
            <AddTweetForm classes={classes} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  )
}