import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import MemberStore from '../stores/MemberStore';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import TrainStore from '../stores/TrainStore';

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
        width: '100%',
    },
    testCard: {
        marginTop: '3%',
        width: '50%',
        height: '50%',
        marginLeft: '10%',
    },
    card: {
        padding: '2%',
    },
    pass: {
        float: 'right',
        marginRight: '2%',
    },
    cardGrid: {
        marginTop: '5%',
        width: '100%',
    },
    rankingCard: {
        width: '20%',
        marginLeft: '7%',
    },
    mainGrid: {
        width: '100%',
    },
    ranking: {
        paddingBottom: '5%',
        marginTop: '15%',
    },
    rankingNum: {
        marginTop: '10%',
    },
});

export default function TranslationView(props) {
    const classes = useStyles();
    const trainStore = React.useContext(TrainStore.context);
    const memberStore = React.useContext(MemberStore.context);
    const [inputText, setInputText] = useState('병렬코퍼스 로딩중 ...');
    const [outputText, setOutputText] = useState('...');
    const [ranking, setRanking] = useState([
        '점주오',
        '면주오',
        '선주오',
        '앉은주오',
        '누운주오',
        '나는주오',
        '선주사',
        '선주육',
        '선주칠',
        '선주일',
        '선주이',
        '선수오',
    ]);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [severity, setSeverity] = useState('success');

    const getTestCase = () => {
        /*trainStore.getTestCase().then(result =>{
            setInputText(result[0])
            setOutputText(result[1])
        });*/
    };

    useEffect(() => {
        /* 
        getTestCase();
        memberStore.getRanker().then(result=>{
            setRanking(result)
        });*/
    }, []);

    const transLike = () => {
        trainStore
            .transLike(true, inputText, outputText)
            .then((result) => {
                setContent('피드백 감사합니다! :)');
                setSeverity('success');
                setOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const transDislike = () => {
        trainStore
            .transLike(false, inputText, outputText)
            .then((result) => {
                setContent('피드백 감사합니다! :)');
                setSeverity('success');
                setOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title} variant="h3">
                    北파고 트레이닝
                </Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.mainContent}>
                    <Grid className={classes.mainGrid} container direction="row">
                        <div className={classes.testCard}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.trainText} variant="h5">
                                        {inputText}
                                    </Typography>
                                    <br />
                                    <Typography variant="h6">{outputText}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid
                                        className={classes.cardGrid}
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
                                                size="large"
                                                onClick={transLike}
                                            >
                                                <ThumbDownAltIcon></ThumbDownAltIcon>
                                            </Button>
                                        </Grid>

                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                disableRipple
                                                size="large"
                                                onClick={transDislike}
                                            >
                                                <ThumbUpAltIcon></ThumbUpAltIcon>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                                <div>
                                    <Tooltip
                                        className={classes.pass}
                                        onClick={getTestCase}
                                        disableHoverListener
                                        title="Add"
                                    >
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
                                                <Typography className={classes.title} variant="h5">
                                                    오늘의 순위
                                                </Typography>
                                            </Grid>
                                        </div>
                                        <div className={classes.ranking}>
                                            <Grid
                                                container
                                                direction="column"
                                                justify="center"
                                                alignItems="center"
                                                spacing={7}
                                            >
                                                {ranking.map((value, idx) => {
                                                    return (
                                                        <div>
                                                            <Typography
                                                                className={classes.rankingNum}
                                                                variant="h6"
                                                            >
                                                                {idx + 1}. {value}
                                                            </Typography>
                                                        </div>
                                                    );
                                                })}
                                            </Grid>
                                        </div>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={1100}
                    onClose={handleClose}
                    content={content}
                    severity={severity}
                >
                    <Alert onClose={handleClose} severity={severity}>
                        {content}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}
