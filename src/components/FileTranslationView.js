
import clsx from 'clsx';
import { makeStyles } from "@material-ui/styles"
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomUploadTable from './CustomUploadTable';


const useBodyStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        display: "inline-block",
    },
    title: {
        paddingTop: "4%",
        textAlign: "center",
        fontWeight: "600"
    },
    content: {
        paddingTop: "5%",
        width: "100%",
        height: "auto"
    },
    leftBox: {
        width: "40%",
    },
    rightBox: {
        width: "40%",
    },
    middleBox: {
        width: "8%",
        height: "100%"
    },
    columFlexBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    alignCenter: {
        alignItems: "center"
    },
    translateBtn: {
        fontWeight: "600",
        fontSize: "1rem",
    }
})

export default function FileTranslationView(props) {
    const classes = useBodyStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h3">
                    파일번역
                </Typography>
            </div>
            <br />
            <div className={classes.content}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Box component={Paper} className={clsx(classes.columFlexBox, classes.leftBox)}>
                        <CustomUploadTable />
                    </Box>

                    <Box className={clsx(classes.columFlexBox, classes.alignCenter, classes.middleBox)}>
                        <Button
                            variant="contained"
                            className={classes.translateBtn}
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                        >
                            변환
                        </Button>
                    </Box>

                    <Box component={Paper} className={clsx(classes.columFlexBox, classes.rightBox)}>
                    </Box>
                </Grid>
            </div>
        </div>
    )
};