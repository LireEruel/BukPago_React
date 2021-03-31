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
    content: {
        paddingTop: '5%',
    },
    mainContent: {
        width : '70%',
    },
    card: {
        width: "75%",
        height : "50%",
        marginLeft : "15%"
    },
    pass: {
        float: 'right'
    },
    cardGrid: {
        width: '1000%'
    },
    ranking : {
        width: '20%'
    }
}
)

export default function TranslationView(props) {
    const classes = useStyles();
    const [inputText,setInputText] = useState('안녕하세요 저는 바보입니다.');
    const [outputText,setOutputText] = useState('안녕하세요 저는 바보입니다.');
    const translationStore = React.useContext(TranslationStore.context);

    /*
    useEffect(() => {
        translationStore.getTestCase();
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
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {inputText}
                            </Typography>
                            <br />
                            <Typography variant="h6" component="h2">
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
                            <Typography className={classes.pass}>
                                건너뛰기 →
                            </Typography>
                        </div>
                    </Card>
                    </div>
                    <div className={classes.ranking}>
                            <Card>
                                <CardContent>
                                    얍!
                                </CardContent>
                            </Card>
                    </div>
                
            </div>
        </div>
    )
}