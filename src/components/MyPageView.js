import React, { useEffect, useRef, useState, useContext,observer } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Tab, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList } from 'react-window';
import MemberStore from '../stores/MemberStore';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';

import Profile from './ProfileCard';
import RankingCard from './RankingCard';
import EvaluatedView from './EvaluatedView';

const useStyles = makeStyles({
    root: {
        width: '99%',
        height: '100%',
        display: 'inline-block',
    },
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
        width: '50%',
        maxHeight : '10%'
    },
    rankingCard : {
        width : '50%',
        height : '100%'
    },
    list : {
        paddingBottom : '5%',
        width : '100%',
        maxHeight : '30%',
        overflow: 'auto',
    },
    ki : {
        fontWeight: 600,
        marginTop : '5%',
        marginLeft : '45%'
    }

})


export default function TranslationView(props) {

    const classes = useStyles();
    const hasCookie = props.hasCookie;
    let history = useHistory();

    const memberStore = useContext(MemberStore.context);
    const [name, setName] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [email, setEmail] = useState("");
    const [percent, setPercent] = useState(0);
    const [ranking, setRanking] = useState(0);
    const [evaluated, setEvaluated] = useState([]);
    const [id, setId] = useState("");
    const [apiKey, setKey] = useState("api키 미신청");
    const [evalCount , setCount] = useState(0);
    
    useEffect(() => {
        memberStore.getUserInfo().then((res) => {
            setId(res.data.data.id);
            setName(res.data.data.nickname);
            setIsAdmin(res.data.data.isAdmin);
            setEmail(res.data.data.email);
            setEvaluated(res.data.data.evalInfo);
            setCount(res.data.data.evaluationCount);
        });
        
        
        memberStore.getMyRank().then((res) => {
            setPercent(res.data.rank_rate);
            setRanking(res.data.rank);
        });
        
        
        memberStore.getApiKey().then((res) => {
            if(res.status == 200)
                setKey(res.data.apiKey);
        });
         
    }, [])


    return(
        <div className={classes.root}>
            <div className={classes.content}>
                <Grid className={classes.grid} container direction="row" justify="space-around">
                    <div className={classes.left}>
                        <Profile name={name} isAdmin={isAdmin} email={email} id={id} apiKey={apiKey} />
                        <RankingCard percent={percent} ranking= {ranking} />
                    </div>  
                    <div className={classes.right}>

                        <div>
                                <Typography className={classes.ki} variant="h4">
                                    평가기록
                                </Typography>

                                {
                                    evalCount < 1 ? 
                                    (
                                        <Grid item align="center">
                                            <br/>
                                            <Typography  className={classes.title} variant="h5"> 최근 번역 평가 기록이 없습니다.</Typography>
                                        </Grid> 
                                    )                                     
                                    :
                                    (
                                        <List className={classes.list} >
                                            {
                                                evaluated.map((element) => {
                                                    return(
                                                        <Grid item align="center">
                                                            <EvaluatedView element={element}/>  
                                                        </Grid>
                                                                              
                                                    )
                                                })
                                            }
                                        </List>
                                        
                                
                                    )
                                
                                }
                            
                        </div>
                            
                                    
                                    


                    </div>                  
                </Grid>
                   

            </div>

        </div>
    )
}


