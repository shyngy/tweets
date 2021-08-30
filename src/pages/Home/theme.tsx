import { makeStyles, Theme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useHomeStyle = makeStyles((theme: Theme) => ({
  wrapper: {
    padding: 8
  },
  userAvatar: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  sideMenuList: {
    position: "sticky",
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    color: grey[700],
    "& h6": {
      fontWeight: 500,
      fontSize: 18,
      padding: "0 10px 0 5px",
      lineHeight: 2,
    },


  },

  sideMenuListLi: {
    padding:"5px 0 5px 5vw",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: grey[700],
    "& div": {
      display: "inline-flex",
      transition: "background-color .2s ease-in-out",
      borderRadius: 50,
      padding: "5px",
      marginBottom: 5,
    },
   
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
      },
      color: theme.palette.primary.main
    }
  },
  sideMenuListIcons: {
    fontSize: 35,
  },
  tweetButton: {
    width: "12vw",
    padding: 9,
    fontSize: 14,
    marginTop: 10
  },
  menuAdaptive: {
    position: "sticky",
    top: 0,
    padding: 0,
    margin: 0,
    fontSize: 10,
    "& h6": {
      display: "none",
    },
    "& li": {
      justifyContent: "flex-end",
    },

  },

  mainHeader:{
    display: 'flex',
    position: "sticky",
    backgroundColor: "white",
    borderRadius: 0,
    border: 'none',
    padding: 4,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    top: 0,
    zIndex: 10,
    "& h4": {
      fontSize: 22,
      fontWeight: 700,
      paddingBottom: 10,
      position: "relative",
      bottom: -10,
      marginLeft: 10,
      marginBottom: 15,

    }
  },

  mainSection: {
    position: 'relative',
    height: "100%",
    borderRadius: 0,
    borderBottom: 0,
    borderTop: 0,

    
  },
  tweet: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(245,248,250)"
    },
    "& a":{
      textDecoration:'none',
      color: 'inherit'
    }
  },
  mainSectionLiner: {
    padding: 12,
    paddingBottom: 5,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderRadius: 0,
    
  },
  searchSection: {
    padding: "2px 8px 0 1vw",
  },
  userName: {
    fontSize: 14,
    color: grey[500],

  },
  userPostText: {
    fontSize: 14,
    margin: "3px 0",
  },
  userPostFooter: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: 190,
    maxWidth: 400,
    position: "relative",
    left: -13,


  },
  userPostBottom: {
    fontSize: 16,

  },
  iconCounts: {
    color: grey[600],
    fontSize: 12,
    paddingTop: 14
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    maxWidth: 450,
  },
  fullName: {
    fontSize: 15
  },
  addForm: {
    padding: 0,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: "100%",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#E6ECF0",
  },
  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
  },
  rightSide: {
    paddingTop: 10,
    position: "sticky",
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: "#F5F8FA",
    borderRadius: 15,
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: "13px 18px",
    "& b": {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: "pointer",
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiListItemAvatar-root": {
      minWidth: 50,
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
    },
    "& a":{
      color: "inherit",
      textDecoration: "none"
    }
  },

}))