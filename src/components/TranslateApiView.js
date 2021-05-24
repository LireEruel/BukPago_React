import { observer } from "mobx-react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useGetApiKeyStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        paddingTop: '2%',
        fontWeight: 600,
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
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                </Grid>
            </div>
        </div>
    )
})