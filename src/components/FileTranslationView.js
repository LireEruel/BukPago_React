import React, { useState } from 'react'
import { makeStyles } from "@material-ui/styles"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Toolbar from '@material-ui/core/Toolbar';
import DeleteIcon from '@material-ui/icons/Delete';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';

import FileTranslationStore from '../stores/FileTranslationStore'

const useCustomToolbarStyles = makeStyles({
    root: {
        paddingTop: "1%",
    },
    title: {
        flex: "1 1 100%",
    },
    button: {
        width: '105px',
        color: 'white',
        fontWeight: "600",
        fontSize: "1rem",
    },
    uploadButton: {
        backgroundColor: '#228b22',
    },
    downloadButton: {
        width: '120px',
    },
    input: {
        display: "none",
    }
})

const CustomToolbar = (props) => {
    const classes = useCustomToolbarStyles();
    const { title, isMain, fileTranslationStore } = props;

    const handleUploadFile = (e) => {
        console.log('activated!')
        const fileList = e.target.files;

        for (const file of fileList) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;

                let fileInfo = {
                    name: file.name,
                    size: file.size,
                    content: content,
                }

                fileTranslationStore.uploadFile(fileInfo)
            }
            reader.readAsText(file);
        }
    }

    let button = <div>
        <Button
            className={clsx(classes.button, classes.downloadButton)}
            variant="contained"
            component="label"
            color="primary"
            endIcon={<GetAppIcon />}
        >
            다운로드
        </Button>
    </div>

    if (isMain) {
        button = fileTranslationStore.numSelected > 0 ? (
            <div>
                <Button
                    className={classes.button}
                    variant="contained"
                    component="label"
                    color="secondary"
                    endIcon={<DeleteIcon />}
                >
                    삭제
                </Button>
            </div>
        ) : (
            <div>
                <Button
                    className={clsx(classes.button, classes.uploadButton)}
                    variant="contained"
                    component="label"
                    endIcon={<PublishIcon />}
                >
                    업로드
                    <input
                        id='upload'
                        className={classes.input}
                        multiple
                        type="file"
                        accept=".txt"
                        onChange={handleUploadFile.bind(this)}
                    />
                </Button>
            </div>
        )
    }

    return (
        <Toolbar className={classes.root}>
            {
                fileTranslationStore.numSelected > 0 ? (
                    <Typography className={classes.title} variant="subtitle1" component="div">
                        {fileTranslationStore.numSelected} 선택 됨
                    </Typography>
                ) : (
                    <Typography className={classes.title} variant="h6" component="div">
                        {title}
                    </Typography>
                )
            }
            {button}
        </Toolbar>
    )
}

const useCustomTableHeaderStyles = makeStyles({
    root: {
        width: '100%',
    },
    idCell: {
        width: '5%'
    },
    nameCell: {
        width: '75%'
    },
    sizeCell: {
        width: '20%'
    }
})

const CustomTableHeader = (props) => {
    const classes = useCustomTableHeaderStyles();
    const { fileTranslationStore } = props;

    return (
        <TableHead className={classes.root}>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={fileTranslationStore.numSelected > 0 && fileTranslationStore.numSelected < fileTranslationStore.originalFiles.length}
                    />
                </TableCell>
                <TableCell className={classes.idCell} key='id' align='center'>ID</TableCell>
                <TableCell className={classes.nameCell} key='fileName' align='left'>파일 이름</TableCell>
                <TableCell className={classes.sizeCell} key='filSize' align='left'>파일 크기</TableCell>
            </TableRow>
        </TableHead>
    )
}

const useCustomTableStyles = makeStyles({
    root: {
        width: '100%'
    }
})

const CustomCheckboxTable = (props) => {
    const classes = useCustomTableStyles();
    const { title, isMain, fileTranslationStore } = props;

    return (
        <div className={classes.root}>
            <CustomToolbar
                title={title}
                isMain={isMain}
                fileTranslationStore={fileTranslationStore}
            />
            <CustomTableHeader fileTranslationStore={fileTranslationStore} />
            <TableBody>
                {fileTranslationStore.originalFiles.map((fileInfo, index) => {
                    <TableRow>
                        <TableCell>
                            
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </div>
    )
}

const CustomNonCheckboxTable = (props) => {
    const classes = useCustomTableStyles();
    const { title, isMain, fileTranslationStore } = props;


    return (
        <div className={classes.root}>
            <CustomToolbar
                title={title}
                isMain={isMain}
                fileTranslationStore={fileTranslationStore}
            />
            <CustomTableHeader fileTranslationStore={fileTranslationStore} />
        </div>
    )
}

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
    const fileTranslationStore = React.useContext(FileTranslationStore.context);

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
                        <CustomCheckboxTable title='원본파일' isMain={true} fileTranslationStore={fileTranslationStore} />
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
                        <CustomNonCheckboxTable title='변환파일' isMain={false} fileTranslationStore={fileTranslationStore} />
                    </Box>
                </Grid>
            </div>
        </div>
    )
}