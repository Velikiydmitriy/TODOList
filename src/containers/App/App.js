import React, {useState, useEffect} from 'react';
import filter from 'lodash/filter';
import {makeStyles} from '@material-ui/core/styles';

import AppView from "../../components/Appview/AppView";
// Style
import {AppStyle} from './App.style'

function App() {
    const useStyles = makeStyles(AppStyle);
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState();
    const [itemsList, setItemsList] = useState([
        {id: 1, text: 'Do 100 JavaScript Projects', star: false, check: false, edit: false},
        {id: 2, text: 'Learn NodeJS', star: false, check: false, edit: false},
        {id: 3, text: 'Learn ReactJS', star: false, check: false, edit: false},
        {id: 4, text: 'Learn GraphQJ', star: false, check: false, edit: false},
    ]);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    const onAddItem = (value) => {
        setItemsList([
            ...itemsList,
            value
        ])
    }

    const onSearch = (searchValue) => {
        setSearchText(searchValue);
    }

    const onChangeItem = (id, mode, value) => {
        let newArray;
        if (mode === 'delete') {
            newArray = filter(itemsList, item => item.id !== id);
        } else {
            newArray = itemsList.map(item => {
                if (item.id === id) {
                    item[mode] = value || !item[mode];
                }
                return item;
            })
        }
        setItemsList(newArray)
    }

    const onClear = () => setItemsList([]);

    const currentList = searchText
        ? filter(itemsList, item => item.text.includes(searchText))
        : itemsList;

    return (
        <div>
            <AppView
                classes={classes}
                isLoading={isLoading}
                currentList={currentList}
                onSearch={onSearch}
                onAddItem={onAddItem}
                onChangeItem={onChangeItem}
                onClear={onClear}/>
        </div>
    );
}

export default App;