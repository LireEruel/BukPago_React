import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomUploadTable from './CustomUploadTable';
import CustomDownloadTable from './CustomDownloadTable';
import { useSnackbar } from 'material-ui-snackbar-provider'
import { observer } from 'mobx-react';
import { useStores } from '../stores/Context'
import { useHistory } from 'react-router';

const useBodyStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'inline-block',
    },
    title: {
        paddingTop: "2%",
        textAlign: 'center',
        fontWeight: 600,
    },
    content: {
        paddingTop: '5%',
        width: '100%',
        height: 'auto',
    },
    leftBox: {
        width: '42.5%',
    },
    rightBox: {
        width: '42.5%',
    },
    middleBox: {
        width: '8%',
        paddingTop: '1%',
    },
    columFlexBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    alignCenter: {
        justifyContent: 'center',
    },
    translateBtn: {
        fontSize: '1rem',
    },
});

export default observer(function FileTranslationView(props) {
    const classes = useBodyStyles();
    const snackbar = useSnackbar();
    let history = useHistory();
    const hasCookie = props.hasCookie;
    const { FileTranslationStore } = useStores();

    const handleTranslate = () => {
        console.log(hasCookie);
        if (!hasCookie) {
            snackbar.showMessage(
                '파일번역 기능은 로그인이 필요합니다.',
                '확인', () => history.push('/buk-pago/signIn')
            )
        } else if (FileTranslationStore.fileCount === 0) {
            snackbar.showMessage(
                '번역할 파일이 존재 하지 않습니다'
            )
        } else {
            FileTranslationStore.requestFileTranslate().then((res) => {
                if (res === null) {
                    snackbar.showMessage(
                        '파일 번역 실패, 재시도 바랍니다.', '확인'
                    )
                } else {
                    try {
                        snackbar.showMessage(
                            res.data.message, '확인'
                        )
                    } catch {
                        snackbar.showMessage(
                            '파일 번역 완료', '확인'
                        )
                    }
                }
            })
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h3" className={classes.title}>
                    파일번역
                </Typography>
            </div>
            <br />
            <div className={classes.content}>
                <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Box component={Paper} className={clsx(classes.columFlexBox, classes.leftBox)}>
                        <CustomUploadTable />
                    </Box>

                    <Box
                        className={clsx(classes.columFlexBox, classes.alignCenter, classes.middleBox)}
                    >
                        <Button
                            variant="contained"
                            className={classes.translateBtn}
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleTranslate}
                        >
                            번역
                        </Button>
                    </Box>
                    <Box component={Paper} className={clsx(classes.columFlexBox, classes.rightBox)} >
                        <CustomDownloadTable />
                    </Box>
                </Grid>
            </div>
        </div>
    );
});
