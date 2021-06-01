import React, { useEffect, useRef, useState, useContext,observer } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Tab, Typography } from '@material-ui/core';
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
import { SpaceBar } from '@material-ui/icons';
import { composeClasses } from '@material-ui/data-grid';
import MemberUpdateDialog from './MemberUpdateDialog';



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
    const id=props.id
    const name = props.name;
    const isAdmin = props.isAdmin;
    const email = props.email;
    const apiKey = props.apiKey;

    const [adminText,setAdminText] = useState('일반회원')
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    useEffect(() => {
        if (isAdmin == true)
            setAdminText('관리자')
    });
    return(
        <div className = {classes.root}>
            <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} variant="h4">
                                프로필
                            </Typography>
                            <br></br>
                            <Grid>
                                <div>
                                    <Grid className={classes.contentGrid} 
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                            
                                        <div>
                                            <Typography  className={classes.title} variant="h5">
                                                닉네임
                                            </Typography>
                                        </div>
                                        <Tab></Tab>
                                        <div>
                                            <Typography  className={classes.title} variant="h6">
                                                {name}
                                            </Typography>
                                        </div>
        
                                    </Grid>
                                
                                </div>
                                <div>
                                    <Grid className={classes.contentGrid} 
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                            
                                        <div>
                                            <Typography  className={classes.title} variant="h5">
                                                이메일
                                            </Typography>
                                        </div>
                                        <Tab></Tab>
                                        <div >
                                            <Typography  className={classes.title} variant="h6">
                                                {email}
                                            </Typography>
                                        </div>
                                    </Grid>
                                
                                </div>
                                <div>
                                    <Grid className={classes.contentGrid} 
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                            
                                        <div>
                                            <Typography  className={classes.title} variant="h5">
                                                등급
                                            </Typography>
                                        </div>
                                        <Tab></Tab>
                                        <div className={classes.isAdmin}>
                                            <Typography  className={classes.title} variant="h6">
                                                {adminText}
                                            </Typography>
                                        </div>
                                    </Grid>
                                
                                </div>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <MemberUpdateDialog className={classes.editButton} open={open} onClose = {handleClose} id = {id} name={name} email = {email} apiKey={apiKey}/>          
                        </CardActions>
                    </Card>     
                       
        </div>
    )
}