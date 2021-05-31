import { Box, ListItem, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core"
import clsx from "clsx";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { FixedSizeList } from 'react-window';
import { useStores } from '../stores/Context'
import EvaluationLogItem from "./EvaluationLogItem";

const useAdminPageStyles = makeStyles({
    paddingTop: {
        paddingTop: '2%'
    },
    paddingBottom: {
        paddingBottom: '2%'
    },
    root: {
        width: '100%',
        height: '100%',
        display: 'inline-block',
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    pageTitle: {
        paddingLeft: '5%',
        textAlign: 'center',
        fontWeight: 600,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    leftBox: {
        width: '25%',
    },
    rightBox: {
        width: '90%',
    },
    LeftBoxContent: {
        width: '100%',
        display: 'flex-inline',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 600,
    },
    evaluationBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default observer(function AdminPageView(props) {
    const classes = useAdminPageStyles();
    const { AdminPageStore } = useStores();

    useEffect(() => {
        AdminPageStore.requestEvaluationLog();
    }, [])

    return (
        <div className={classes.root} >
            <div className={clsx(classes.header, classes.paddingTop)}>
                <Typography variant='h3' className={classes.pageTitle}>
                    관리자 페이지
                </Typography>
            </div>
            <div className={clsx(classes.content, classes.paddingTop)}>

                <Box component={Paper} className={classes.rightBox}>
                    <div className={classes.LeftBoxContent}>
                        <Typography variant='h4' className={clsx(classes.subTitle, classes.paddingTop, classes.paddingBottom)}>
                            전체 평가기록
                        </Typography>
                        <Box className={clsx(classes.evaluationBox)}>
                            <FixedSizeList
                                width='98%'
                                height={610}
                                itemSize={100}
                                itemCount={AdminPageStore.evaluationLog.length}
                            >
                                {({ index, style }) => (
                                    <EvaluationLogItem index={index} style={style} />
                                )}
                            </FixedSizeList>
                        </Box>
                    </div>
                </Box>
            </div>
        </div>
    )
})