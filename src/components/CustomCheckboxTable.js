import { useState } from 'react';
import { observer } from 'mobx-react'
import { Button, Checkbox, lighten, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PublishIcon from '@material-ui/icons/Publish';

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
    uploadButton: {
        backgroundColor: '#228b22',
    },
    input: {
        display: "none",
    },
    highlight: {
        color: '#f50057',
        backgroundColor: lighten('#ff4081', 0.85),
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

export default observer(function CustomCheckboxTable(props) {
    const classes = useCustomTableStyles();
    const [selected, setSelected] = useState([]);
    const { FileTranslationStore } = useStores();

    const handleUploadFile = (e) => {
        let files = e.target.files

        FileTranslationStore.uploadFile(files)
    }

    const handleSelectAllClick = (event) => {
        const newSelected = []

        if (event.target.checked) {
            FileTranslationStore.originalFiles.forEach((file, index) => {
                newSelected.push(index)
            })
        }

        setSelected(newSelected);
    }

    const handleClick = (event, index) => {
        const selectedIndex = selected.indexOf(index);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    }

    const isSelected = (index) => {
        return selected.indexOf(index) !== -1;
    }

    return (
        <div className={classes.root}>
            <Toolbar className={clsx(classes.toolbarRoot, { [classes.highlight]: selected.length > 0 })}>
                {
                    FileTranslationStore.numSelected > 0 ? (
                        <Typography className={classes.toolbarTitle} variant="subtitle1" component="div">
                            {FileTranslationStore.numSelected} 선택 됨
                        </Typography>
                    ) : (
                        <Typography className={classes.toolbarTitle} variant="h6" component="div">
                            원본파일
                        </Typography>
                    )
                }
                {selected.length > 0 ? (
                    <Button
                        className={classes.button}
                        variant="contained"
                        component="label"
                        color="secondary"
                        endIcon={<DeleteIcon />}
                    >
                        삭제
                    </Button>
                ) : (
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
                            onChange={handleUploadFile}
                        />
                    </Button>
                )
                }
            </Toolbar>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead className={classes.headerRoot}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < FileTranslationStore.fileCount}
                                    checked={FileTranslationStore.fileCount > 0 && selected.length === FileTranslationStore.fileCount}
                                    onChange={handleSelectAllClick}
                                />
                            </TableCell>
                            <TableCell className={classes.idCell} key='id' align='center'>ID</TableCell>
                            <TableCell className={classes.nameCell} key='fileName' align='left'>파일 이름</TableCell>
                            <TableCell className={classes.sizeCell} key='filSize' align='left'>파일 크기</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {FileTranslationStore.originalFiles.map((fileInfo, index) => {
                            const isItemSelected = isSelected(index);

                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, index)}
                                    role="checkbox"
                                    key={index}
                                    selected={isItemSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.idCell}>{index}</TableCell>
                                    <TableCell className={classes.nameCell}>{fileInfo.name}</TableCell>
                                    <TableCell className={classes.sizeCell}>{fileInfo.size}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
});