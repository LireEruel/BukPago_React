import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { Box, Button, Container, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core";
import { useSnackbar } from 'material-ui-snackbar-provider'
import clsx from "clsx";
import { useStores } from '../stores/Context'
import TranslationStore from "../stores/TranslationStore";

const useGetApiKeyStyles = makeStyles((theme) => ({
    boldText: {
        fontWeight: '600'
    },
    root: {
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        paddingTop: '2%',
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
    },
    registrationTitle: {
        paddingBottom: '1%'
    },
    registrationBox: {
        paddingBottom: '10%'
    },
    formControl: {
        marginTop: theme.spacing(2)
    },
    registrationBtn: {
        height: '60px'
    }
}));

export default observer(function TranslateApiView(props) {
    const classes = useGetApiKeyStyles();
    const [purpose, setPurpose] = useState('');
    const applicant = useRef('');
    const snackbar = useSnackbar();
    let history = useHistory();
    const hasCookie = props.hasCookie;
    const translationStore = React.useContext(TranslationStore.context);

    const handleChange = (event) => {
        setPurpose(event.target.value);
    }

    const getApiKey = (event) => {
        event.preventDefault();


        if (!hasCookie) {
            snackbar.showMessage(
                '번역 API 키 발급은 로그인이 필요합니다.',
                '이동', () => history.push('/buk-pago/signIn')
            )
        } else {
            if (applicant === '' || purpose === '') {
                snackbar.showMessage('신청 양식을 작성해주세요')
            } else {
                translationStore.getApiKey(applicant.current.value, purpose).then((res) => {
                    if (res.status === 200) {
                        snackbar.showMessage(
                            '번역 API 키 발급 완료. 발급된 키는 마이페이지에서 확인',
                            '확인', () => history.push('/buk-pago/myPage')
                        )
                    }
                    else {
                        snackbar.showMessage(
                            '번역 API 키 발급 반려됨.', '확인'
                        )
                    }
                }
                )
            }
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={clsx(classes.title, classes.boldText)} variant='h3'>
                    北파고 API 키 발급
                </Typography>
            </div>
            <div className={classes.content}>
                <Grid container direction='row' justify='center' alignItems="flex-start">
                    <Box className={classes.leftBox}>
                        <Grid container direction='column' justify='center' alignItems='flex-start'>
                            <Box>
                                <Typography variant='h4' className={clsx(classes.usageTitle, classes.boldText)}>
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
                        <Container maxWidth="sm">
                            <form noValidate>
                                <div className={classes.registrationBox}>
                                    <Typography variant='h4' className={clsx(classes.registrationTitle, classes.boldText)}>API 요청자 이름</Typography>
                                    <TextField
                                        variant="outlined"
                                        margin='normal'
                                        fullWidth
                                        required
                                        label="이름"
                                        inputRef={applicant}
                                        className={classes.textField}
                                    />
                                </div>
                                <div className={classes.registrationBox}>
                                    <Typography variant='h4' className={clsx(classes.registrationTitle, classes.boldText)}>활용 목적</Typography>
                                    <FormControl required variant="outlined" fullWidth className={classes.formControl}>
                                        <InputLabel id="purpose">활용목적</InputLabel>
                                        <Select
                                            id='purpose'
                                            value={purpose}
                                            variant='outlined'
                                            label="활용목적"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'hobby'}>취미</MenuItem>
                                            <MenuItem value={'research'}>연구</MenuItem>
                                            <MenuItem value={'homework'}>과제</MenuItem>
                                            <MenuItem value={'etc'}>기타</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.registrationBtn}
                                    onClick={getApiKey}
                                >
                                    신청하기
                                </Button>
                            </form>
                        </Container>
                    </Box>
                </Grid>
            </div>
        </div>
    )
})