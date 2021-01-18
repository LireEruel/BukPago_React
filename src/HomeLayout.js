import React from 'react';
import {
    AppBar,
    createMuiTheme,
    Toolbar,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";


const useStyle = makeStyles((theme) => ({
    root: {
        width:'100%',
        height: '100%',
    },
    appBar: {
        backgroundColor:'#58a0d1'
    },
    grid:{
        paddingLeft:'5%',
        width: '40%'
    },
    title: {
        fontSize : '18px'
    }
}))

const whiteTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#fff" //button text white instead of black
    },
    background: {
      default: "#394764"
    }
  }
});

function HomeLayout(props) {

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar} alignItems="flex-end" position="fixed" >
                    <Grid className={classes.grid} 
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >   
                    <MuiThemeProvider theme={whiteTheme}>
                        <Button className={classes.title} color="primary" size="large" >北파고</Button>
                        <Button className={classes.title} color="primary" size="large" >파일번역</Button>
                        <Button className={classes.title} color="primary" size="large" >북한말 사전</Button>
                        <Button className={classes.title} color="primary" size="large">자유게시판</Button>
                    </MuiThemeProvider>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default HomeLayout;