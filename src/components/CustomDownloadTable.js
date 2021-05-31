import { observer } from 'mobx-react'
import { Button, Checkbox, lighten, LinearProgress, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import { useStores } from '../stores/Context';
import clsx from 'clsx';

const useCustomTableStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        maxHeight: '375px'
    },
    toolbarRoot: {
        paddingTop: '1%'
    },
    toolbarTitle: {
        flex: "1 1",
    },
    button: {
        color: 'white',
        fontSize: "1rem",
    },
    downloadButton: {
        backgroundColor: '#F07069',
    },
    headerRoot: {
        width: '100%'
    },
    idCell: {
        width: '5%'
    },
    nameCell: {
        width: '75%'
    },
    sizeCell: {
        width: '20%'
    },
})

export default observer(function CustomDownloadTable(props) {
    const classes = useCustomTableStyles();
    const { isLoading } = props;
    const { FileTranslationStore } = useStores();

    const returnFileSize = (size) => {
        if (size === 0) {
            return 'n/a'
        }

        var sizes = ['바이트', '킬로바이트', '메가바이트', '기가바이트', '테라바이트', '페타바이트'];
        var e = Math.floor(Math.log(size) / Math.log(1024));
        return (size / Math.pow(1024, e)).toFixed(2) + " " + sizes[e];
    }

    const downloadFile = (event) => {
        event.preventDefault();
        FileTranslationStore.downloadFiles();
    }

    const handleSelectAllClick = (event) => {
        event.preventDefault();
        FileTranslationStore.setSelectAll('translated', event);
    }

    const handleClick = (event, name) => {
        event.preventDefault();
        FileTranslationStore.setSelected('translated', name);
    }

    const isSelected = (name) => {
        return FileTranslationStore.selectedTranslated.indexOf(name) !== -1;
    }

    return (
        <div className={classes.root}>
            <Toolbar className={clsx(classes.toolbarRoot)}>
                <Typography className={classes.toolbarTitle} variant="h6" component="div">
                    번역파일
                </Typography>
                {FileTranslationStore.selectedTranslated.length > 0 &&
                    <Button
                        className={clsx(classes.button, classes.downloadButton)}
                        variant="contained"
                        component="label"
                        endIcon={<GetAppIcon />}
                        onClick={downloadFile}
                    >
                        다운로드
                    </Button>
                }
            </Toolbar>
            {isLoading === true &&
                <LinearProgress color="secondary" />
            }
            <TableContainer className={classes.container}>
                <Table stickyHeader className={classes.table}>
                    <TableHead className={classes.headerRoot}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={FileTranslationStore.selectedTranslated.length > 0 && FileTranslationStore.selectedTranslated.length < FileTranslationStore.fileCount}
                                    checked={FileTranslationStore.fileCount > 0 && FileTranslationStore.selectedTranslated.length === FileTranslationStore.fileCount}
                                    onChange={handleSelectAllClick}
                                />
                            </TableCell>
                            <TableCell className={classes.idCell} key='id' align='center'>ID</TableCell>
                            <TableCell className={classes.nameCell} key='fileName' align='left'>파일 이름</TableCell>
                            <TableCell className={classes.sizeCell} key='filSize' align='left'>파일 크기</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {FileTranslationStore.translatedFiles.map((fileInfo, index) => {
                            const isItemSelected = isSelected(fileInfo.name);

                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, fileInfo.name)}
                                    role="checkbox"
                                    key={fileInfo.name}
                                    selected={isItemSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox checked={isItemSelected} />
                                    </TableCell>
                                    <TableCell className={classes.idCell}>{index + 1}</TableCell>
                                    <TableCell className={classes.nameCell}>{fileInfo.name}</TableCell>
                                    <TableCell className={classes.sizeCell}>{returnFileSize(fileInfo.size)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
})