import React, { useEffect, useRef, useState, useContext,observer } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Tab, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MemberStore from '../stores/MemberStore';
import Snackbar from '@material-ui/core/Snackbar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles ( {
    title: {

        fontWeight: 600,
    },

    content: { 
        width: '99%',
    },
    card : {
        marginLeft:'15%',
        marginTop: '5%',
        width : '70%',
    },
    contentGrid:{
        marginLeft: '10%',
    },
    rankingContentGrid:{
        marginTop : '5%',
        marginLeft: '10%',
    },
    admin : {
        marginLeft: '4%'
    },
    editButton : {
        marginLeft: '82%'
    },
    percent : {
        color: '#51c268'
    },
    degree : {

    },
    grid : {
        width : '100%'
    },
    left : {
        paddingTop : '5%',
        width : '50%'
    },
    right : {
        width: '50%'
    },
    rankingCard : {
        width : '50%',
        height : '100%'
    }
})

export default function EvaluatedView(props){
    const classes = useStyles();
    const element = props.element;
    const nk = element.nk;
    const sk = element.sk;
    const isLike = element.isLike;
    console.log(element);
    return(
        <div className = {classes.root}>
            <Card className={classes.card}>
                        <CardContent>
                            <br></br>
                            <Grid>
                                {isLike == true ? 
                                <ThumbUpIcon color="primary"/> 
                                :
                                <ThumbDownIcon color="secondary"/>    
                            }
                            
                                <Typography  className={classes.title}>{nk}</Typography>
                                <Typography>{sk}</Typography>  
                                    
                            </Grid>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>                  
        </div>
    )
}