import React from 'react';
import {
    AppBar,
    Toolbar,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
        textColor: 'ffffff'
    }
}))


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
                        <Button className={classes.title} color="primary" >北파고</Button>
                        <Button className={classes.title} color="primary">파일번역</Button>
                        <Button className={classes.title} color="primary">북한말 사전</Button>
                        <Button className={classes.title} color="primary">자유게시판</Button>

                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default HomeLayout;