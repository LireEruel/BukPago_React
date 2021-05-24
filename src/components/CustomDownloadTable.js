import { observer } from 'mobx-react'
import { Button, Checkbox, lighten, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import { useStores } from '../stores/Context';
import clsx from 'clsx';

const useCustomTableStyles = makeStyles({
    root: {
        width: '100%'
    },
    toolbarRoot: {
        paddingTop: '1%'
    },
    toolbarTitle: {
        flex: "1 1",
    },
    button: {
        color: 'white',
        fontWeight: "600",
        fontSize: "1rem",
    },
    downloadButton: {
        backgroundColor: '#F07069',
    },
    input: {
        display: "none",
    },
    highlight: {
        color: '#58a0d1',
        backgroundColor: lighten('#79b3da', 0.85),
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
    const { FileTranslationStore } = useStores();

    const returnFileSize = (size) => {
        if (size === 0) {
            return 'n/a'
        }

        var sizes = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
        var e = Math.floor(Math.log(size) / Math.log(1024));
        return (size / Math.pow(1024, e)).toFixed(2) + " " + sizes[e];
    }

    const handleSelectAllClick = (event) => {
        FileTranslationStore.setSelectAll('translated', event);
    }

    const handleClick = (event, name) => {
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
                <Button
                    className={clsx(classes.button, classes.downloadButton)}
                    variant="contained"
                    component="label"
                    endIcon={<GetAppIcon />}
                >
                    다운로드
                </Button>
            </Toolbar>
            <TableContainer>
                <Table className={classes.table}>
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
                                        <Checkbox
                                            checked={isItemSelected}
                                        />
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