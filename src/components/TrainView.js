import React, { useEffect, useState} from 'react'
import { makeStyles } from "@material-ui/styles"
import Button from '@material-ui/core/Button';
import TranslationStore from '../stores/TranslationStore';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
        width: '99%',
        height: '100%',
        display: 'inline-block',
    },
    title: {
        paddingTop: '2%',
        textAlign: 'center',
        fontWeight: 600,
    },
    trainText: {
        paddingTop: '2%',
        fontWeight: 600,
    },
    content: {
        paddingTop: '2%',
    },
    mainContent: {
        width : '100%',
    },
    testCard: {
        marginTop:'3%',
        width: "50%",
        height : "50%",
        marginLeft: '10%',
    },
    card:{
        padding:'2%'
    },
    pass: {
        float: 'right',
        marginRight: '2%'
    },
    cardGrid: {
        marginTop:'5%',
        width: '100%'
    },
    rankingCard : {
        width: '20%',
        marginLeft : '7%'
    },
    mainGrid : {
        width : '100%'
    },
    ranking : {
        paddingBottom:'5%',
        marginTop: '15%'
    },
    rankingNum : {
        marginTop: '10%'
    }
}
)

const pass = () => {
    //translationStore.getTestCase();
}
export default function TranslationView(props) {
    const classes = useStyles();
    const [inputText,setInputText] = useState('안녕하세요 저는 바보입니다.');
    const [outputText,setOutputText] = useState('안녕하세요 저는 바보입니다.');
    const translationStore = React.useContext(TranslationStore.context);
    const [ranking, setRanking] = useState(['핫','둘','셋','넷','핫','둘','셋','넷','핫','둘','셋','넷']);

    /*
    useEffect(() => {
        translationStore.getTestCase();
        memberStore.getRanker();

    }, []);
    */

    return (
        <div className= {classes.root}>
            <div className = {classes.title}>
                <Typography className = {classes.title} variant="h3">
                    北파고 트레이닝
                </Typography>
            </div>
            <div className = {classes.content}>
                <div className={classes.mainContent}>
                    <Grid 
                        className= {classes.mainGrid}
                        container
                        direction="row"
                    >
                        <div className={classes.testCard}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.trainText} variant="h5" >
                                        {inputText}
                                    </Typography>
                                    <br />
                                    <Typography variant="h6" >
                                        {outputText}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                        <Grid
                                            className = {classes.cardGrid}
                                            container 
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                            spacing={4}
                                        >
                                            <Grid item>
                                                <Button 
                                                    variant="contained"
                                                    disableRipple
                                                    size='large'
                                                >
                                                    <ThumbDownAltIcon></ThumbDownAltIcon>
                                                </Button>
                                            </Grid>
                                            
                                            <Grid item>
                                                <Button 
                                                    variant="contained"
                                                    disableRipple
                                                    size='large'
                                                >
                                                    <ThumbUpAltIcon></ThumbUpAltIcon>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                <div>
                                    <Tooltip className={classes.pass} onClick={pass}  disableHoverListener title="Add" >
                                        <Button>건너뛰기 → </Button>
                                    </Tooltip>
                                </div>
                            </Card>
                        </div>
                        
                        <div className={classes.rankingCard}>
                                <Card>
                                    <CardContent>
                                        <Grid
                                            container
                                            direction="column"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <div>
                                                <Grid container justify="center" alignItems="center">
                                                    <Typography className = {classes.title} variant="h5">
                                                        오늘의 순위
                                                    </Typography>
                                                </Grid>
                                            </div>
                                            <div className={classes.ranking} >
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justify="center"
                                                    alignItems="center"
                                                    spacing={7}
                                                >
                                                    
                                                {
                                                    ranking.map((value,idx) => {
                                                        
                                                        return (
                                                            
                                                            <div>
                                                                <Typography className={classes.rankingNum} variant="h6" >{idx+1}. {value}</Typography>
                                                            </div>

                                                               
                                                        )
                                                    }
                                                    )
                                                }
                                                </Grid>
                                            </div>
                                        </Grid>
                                        
                                    </CardContent>
                                </Card>
                        </div>
                    </Grid>
                    
                    </div>
                    
                
            </div>
        </div>
    )
}