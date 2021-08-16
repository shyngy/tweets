import {createStyles, Grid, InputBase, makeStyles, Paper,  Typography, withStyles } from "@material-ui/core";

import React from "react";

import { Container } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";



export const useHomeStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 8
  },
  sideMenuList: {
    position:'sticky',
    top:0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    color: grey[700],
    '& h6': {
      fontWeight: 500,
      fontSize: 18,
      padding: '0 10px 0 5px',
      lineHeight: 2,
    },


  },
  
  sideMenuListLi: {
    
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: grey[700],
    '& div': {
      display: 'inline-flex',
      transition: 'background-color .2s ease-in-out',
      borderRadius: 50,
      padding: '5px',
      marginBottom: 5,
    },
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
      },
      color: theme.palette.primary.main
    }
  },
  sideMenuListIcons: {
    fontSize: 35,
  },
  tweetButton:{
    width: '12vw',
    padding:9,
    fontSize:14,
    marginTop: 10
  },
  menuAdaptive:{
    position:'sticky',
    top:0,
    padding: 0,
    margin: 0,
    fontSize:10,
    '& h6': {
      display: 'none',
    },
    '& li':{
      justifyContent: 'flex-end',
    },
    
  },



  mainSection: {
    height: '100%',
    borderRadius: 0,
    borderBottom: 0,
    borderTop: 0,
  },
  tweet: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)'
    }
  },
  mainSectionLiner: {
    padding: 12,
    paddingBottom: 5,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderRadius: 0,
    '& h4': {
      fontSize: 20,
      fontWeight: 700,
      paddingBottom: 10
    }
  },
  searchSection: {
    padding: '2px 8px 0 1vw',
  },
  userName: {
    fontSize: 14,
    color: grey[500],

  },
  userPostText: {
    fontSize: 14,
    margin: '3px 0',
  },
  userPostFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 190,
    maxWidth: 400,
    position: 'relative',
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
  fullName: {
    fontSize: 15
  }


}))

const SearchTextFiled = withStyles(() =>
  createStyles({
    input: {
      backgroundColor: '#E6ECF0',
      borderRadius: 50,
      marginTop: 5,
      padding: '14px 10px',
      fontSize: 13,
      height: 13
    }
  }),
)(InputBase)
export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyle()

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={2} style={{padding:'1vw'}}>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid item xs={7} style={{ padding: 0 }}>
          <Paper variant="outlined" className={classes.mainSection}>
            <Paper className={classes.mainSectionLiner} variant="outlined">
              <Typography variant="h4">Главная</Typography>
            </Paper>
            {[...new Array(20).fill(<Tweet text='Nick Ruffilo of 
                  @badomenscult
                  does a playthrough of "Never Know" using an LTD GB-4 bass. The GB-4 is completely unique with its powerful and versatile electronics that combine a set of passive Seymour Duncan SSB-4 pickups with Duncan’s STC-3M3 active EQ.'
              user={{ fullName: 'Shaun Michael Stone', username: '@shaunmstone', avatarUrl: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083387_960_720.jpg' }} classes={classes} />)]}
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.searchSection} >
          <SearchTextFiled fullWidth/>
        </Grid>
      </Grid>
    </Container>)
};