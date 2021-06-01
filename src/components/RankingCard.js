import React, { useEffect, useRef, useState, useContext,observer } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Tab, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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
        width : '90%',
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

export default function ProfileCard(props){
    const classes = useStyles();
    const percent = props.percent;
    const ranking = props.ranking;

    return(
        <div className = {classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <div>
                        <Typography className={classes.title} variant="h4">
                            평가 랭킹    
                        </Typography>
                    </div>
                    <div className={classes.rankingContentGrid}>
                        <Typography className={classes.percent} variant="h3">
                            상위 {percent}%
                        </Typography>
                        <Typography className={classes.degree} variant="h3">
                            {ranking}위
                        </Typography>
                    </div>
                </CardContent>
            </Card>
                        
        </div>
    )
}