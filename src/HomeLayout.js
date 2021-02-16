import React from 'react';
import {
    AppBar,
    Toolbar,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

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
        fontSize : '18px',
        fontWeight : 600
    },
    contentArea : {
        paddingTop : '5%',
        width : '100%',
        height : '100%',
        minHeight : '80%',
        minWidth : '100%',
        position : 'sticky',
    },
    link : {
        textDecoration: 'none'
    }
}))


function HomeLayout(props) {

    const {children} = props;
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
                        <Link className={classes.link}
                            to= {{
                                pathname: "/buk-pago"
                            }}
                        >
                            <Button className={classes.title} color="secondary" size="large" >北파고</Button>
                        </Link>
                        <Button className={classes.title} color="secondary" size="large" >파일번역</Button>
                        <Link className={classes.link}
                            to= {{
                                pathname: "/buk-pago/dictionary"
                            }}
                        >
                            <Button className={classes.title} color="secondary" size="large" >북한말 사전</Button>
                        </Link>
                        <Button className={classes.title} color="secondary" size="large">자유게시판</Button>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
            <div className={classes.contentArea}>
                {children}    
            </div>
        </div>
    )
}


export default HomeLayout;