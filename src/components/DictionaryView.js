import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import DictionaryStore from '../stores/DictionaryStore';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

var elem = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;

var height = elem.clientHeight;
var width = elem.clientWidth;

function getWidth(tableRate, rate) {
    return width * tableRate * rate;
}

const useStyles = makeStyles({
    root: {
        width: '99%',
        height: '100%',
        display: 'inline-block',
    },
    title: {
        paddingTop: '2%',
        textAlign: 'center',
        fontWeight: 600,
        paddingBottom: '1%',
    },
    table: {
        paddingTop: '1%',
        height: height * 0.6,
        width: '75%',
    },
    search: {
        width: '50%',
    },
});

const columns = [
    { field: 'id', headerName: '북한어', width: getWidth(0.75, 2 / 9) },
    { field: 'south', headerName: '남한어', width: getWidth(0.75, 2 / 9) },
    { field: 'mean', headerName: '뜻', width: getWidth(0.75, 5 / 10) },
];

export default function DictionaryView(props) {
    const classes = useStyles();
    const [inputText, setInputText] = useState('');
    const [code, setCode] = useState(1);
    const onChange = (e) => {
        const str = e.target.value;
        setInputText(str);
    };

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const search = () => {
        console.log('코드 : ' + code, '내용 : ' + inputText);
        dictionaryStore.searchDic(code, inputText).then((res) => {
            if (res.status == 200) {
                //
            } else {
                //
            }
        });
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    };

    const dictionaryStore = React.useContext(DictionaryStore.context);
    useEffect(() => {
        dictionaryStore.getDictionary();
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title} variant="h3">
                    북한말 사전
                </Typography>
                <div>
                    <FormControl className={classes.formControl}>
                        <Select value={code} onChange={handleChange}>
                            <MenuItem value={1}>북한어</MenuItem>
                            <MenuItem value={2}>남한어</MenuItem>
                            <MenuItem value={3}>뜻</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        className={classes.search}
                        id="standard-search"
                        type="search"
                        onKeyPress={handleKeyDown}
                        onChange={onChange}
                    />
                    <SearchIcon onClick={search} />
                </div>
            </div>
            <br />
            <div className={classes.content}>
                <Grid
                    className={classes.grid}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <div className={classes.table}>
                        <DataGrid
                            columns={columns}
                            rows={dictionaryStore.dictionarys}
                            pageSize={8}
                        />
                    </div>
                </Grid>
            </div>
        </div>
    );
}
