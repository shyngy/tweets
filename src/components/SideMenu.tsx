import React from "react";
import { useHomeStyle } from "../pages/Home";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Typography from "@material-ui/core/Typography";
import { Button, Hidden, IconButton } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyle>;
  
}



export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {

  const matches = useMediaQuery('(min-width:1050px)');

  return (<ul className={matches ? classes.sideMenuList:classes.menuAdaptive }>

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
      fullWidth>Твитнуть</Button> : <BrushOutlinedIcon  className={classes.sideMenuListIcons} />}
       
      
    </li>
  </ul>)
}