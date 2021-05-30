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
import { useHistory } from 'react-router';
import { useSnackbar } from 'material-ui-snackbar-provider';

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
        backgroundColor: '#228b22',
        fontWeight: '600'
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
        '랭킹 로딩중'
    ]);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [severity, setSeverity] = useState('success');
    let history = useHistory();
    const snackbar = useSnackbar();
    const hasCookie = props.hasCookie;

    const getTestCase = () => {
        trainStore.getTestCase().then(result => {
            setInputText(result.data.NK)
            setOutputText(result.data.SK)
        });
    };

    useEffect(() => {
        getTestCase();

        memberStore.getRanker().then(result => {

            if (result.data.data.length > 0) {
                setRanking(result.data.data)
            }
            else {
                setRanking(['주오짱짱123'])
            }
            console.log(ranking)
        });

    }, []);

    const transLike = () => {
        if (!hasCookie) {
            snackbar.showMessage(
                '북파고 트레인은 로그인이 필요한 서비스 입니다.',
                '확인', () => history.push('/buk-pago/signIn')
            )
            setTimeout(() => history.push('/buk-pago/signIn'), 2000);
        } else {
            trainStore
                .transLike(true, inputText, outputText)
                .then((result) => {
                    setContent('피드백 감사합니다! :)');
                    setSeverity('success');
                    setOpen(true);
                    getTestCase();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const transDislike = () => {
        if (!hasCookie) {
            snackbar.showMessage(
                '북파고 트레인은 로그인이 필요한 서비스 입니다.',
                '확인', () => history.push('/buk-pago/signIn')
            )
            setTimeout(() => history.push('/buk-pago/signIn'), 2000);
        } else {
            trainStore
                .transLike(false, inputText, outputText)
                .then((result) => {
                    setContent('피드백 감사합니다! :)');
                    setSeverity('success');
                    setOpen(true);
                    getTestCase();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
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
                                                onClick={transDislike}
                                            >
                                                <ThumbDownAltIcon></ThumbDownAltIcon>
                                            </Button>
                                        </Grid>

                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                disableRipple
                                                size="large"
                                                onClick={transLike}
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
