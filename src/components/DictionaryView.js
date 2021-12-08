import React, { useEffect, useRef, useState, useContext } from 'react';
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
import { isConstructorDeclaration } from 'typescript';
import { observer } from 'mobx-react';
import { render } from '@testing-library/react';
import { useHistory } from 'react-router-dom';


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
        paddingBottom: '2%',
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

const DictionaryView = observer((props) => {

    const classes = useStyles();
    const dictionaryStore = useContext(DictionaryStore.context);
    const [inputText, setInputText] = useState('');
    const [code, setCode] = useState(1);
    const [onLoad, setOnLoad] = useState(1);
    let history = useHistory();

    const render = () => {
        console.log("랜더링")
        setInputText('');
        setCode(code)
    }

    const onChange = (e) => {
        const str = e.target.value;
        setInputText(str);
    };

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const search = () => {
        dictionaryStore.searchDic(code, inputText).then((res) => {
            console.log(dictionaryStore.dictionarys); f
            render();
        })


    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    };

    useEffect(() => {
        dictionaryStore.getDictionary().then(() => {
            setOnLoad(0);
        })
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
});

export default DictionaryView;
