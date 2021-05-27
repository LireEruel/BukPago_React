import { observer } from "mobx-react";
import { Box, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";

const useGetApiKeyStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        paddingTop: '2%',
        fontWeight: 600,
    },
    content: {
        paddingTop: '5%'
    },
    leftBox: {
        width: '40%',
    },
    rightBox: {
        width: '40%'
    },
    usageTitle: {
        fontWeight: '600',
        paddingLeft: '2%'
    },
    usageContent: {
        paddingTop: '2%'
    },
    usageText: {
        paddingTop: '1%',
        fontSize: '1.2rem'
    },
    apiExampleBox: {
        paddingTop: '3%',
        width: '600px',
        height: '100%',
    },
    apiExampleContent: {
        backgroundColor: '#221E40',
        display: 'flex-inline',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '1% 0'
    },
    apiExampleText: {
        fontSize: '1.2rem',
        fontWeight: '600',
        paddingLeft: '4%'
    },
    apiHead: {
        color: '#2EC970'
    },
    apiForm: {
        color: '#E5BA12'
    },
    apiProtocol: {
        color: '#FFFFFF'
    }
});

export default observer(function TranslateApiView(props) {
    const classes = useGetApiKeyStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title} variant='h3'>
                    北파고 API 키 발급
                </Typography>
            </div>
            <div className={classes.content}>
                <Grid container direction='row' justify='center' alignItems="flex-start">
                    <Box className={classes.leftBox}>
                        <Grid container direction='column' justify='center' alignItems='flex-start'>
                            <Box>
                                <Typography variant='h4' className={classes.usageTitle}>
                                    사용방법
                                </Typography>
                                <div className={classes.usageContent}>
                                    <p className={classes.usageText}>
                                        1. 북파고 페이지를 통해 API Key를 신청한다.
                                    </p>
                                    <p className={classes.usageText}>
                                        2. 발급받은 키를 아래와 같이 코드를 작성해 활용한다.
                                    </p>
                                </div>
                            </Box>
                            <Box className={classes.apiExampleBox}>
                                <div className={classes.apiExampleContent}>
                                    <p className={classes.apiExampleText}>
                                        <span className={classes.apiHead}>GET</span>
                                        <span className={classes.apiForm}> /bukPago/translation/traslate </span>
                                        <span className={classes.apiProtocol}>HTTP/1.1</span>
                                    </p>
                                    <p className={classes.apiExampleText}>
                                        <span className={classes.apiHead}>Host</span>
                                        <span className={classes.apiProtocol}> : dapi.bukpago.com</span>
                                    </p>
                                    <p className={classes.apiExampleText}>
                                        <span className={classes.apiHead}>Authorization</span>
                                        <span className={classes.apiProtocol}> : BukPagoAK 	&#123;REST_API_KEY&#125;</span>
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                    </Box>
                    <Box className={classes.rightBox}>
                        <Grid container direction='column' justify='flex-start' alignItems='center'>
                            <form noValidate>
                                <TextField

                                />
                            </form>
                        </Grid>
                    </Box>
                </Grid>
            </div>
        </div>
    )
})