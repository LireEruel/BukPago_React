import { Divider, makeStyles, Typography } from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useStores } from '../stores/Context'
import { observer } from "mobx-react";
import { BorderStyle } from "@material-ui/icons";

const useEvaluationLogItemStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5px 0'
    },
    header: {
        padding: '0 2%',
    },
    content: {
        flex: '1 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '1%'
    },
    nickname: {
        color: 'grey'
    }
})


export default observer(function EvaluationLogItem(props) {
    const classes = useEvaluationLogItemStyles();
    const { AdminPageStore } = useStores();
    const { index, style } = props;

    const currentLog = AdminPageStore.evaluationLog[index];
    const isLike = currentLog.evalResult
    const nkText = currentLog.NKsentence;
    const skText = currentLog.SKsentence;
    const nickname = currentLog.nickname;

    return (
        < div className={classes.root} style={style} >
            <div className={classes.header}>
                {isLike ? (
                    <ThumbUpIcon color='primary' fontSize='large' />
                ) : (
                    <ThumbDownIcon color='secondary' fontSize='large' />
                )}
            </div>
            <div className={classes.content}>
                <div className={classes.textBox}>
                    <Typography variant='h6' className={classes.nkText}>
                        {nkText}
                    </Typography>
                </div>
                <div className={classes.textBox}>
                    <Typography variant='h6' className={classes.skText}>
                        {skText}
                    </Typography>
                </div>
                <div>
                    <Typography variant='body1' className={classes.nickname}>
                        평가자 : {nickname}
                    </Typography>
                </div>
            </div>
        </div >
    )
})