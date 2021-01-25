import React from 'react';
import sortBy from 'lodash/sortBy';
import {Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import Search from "../../components/Search/Search";
import SendInput from "../../components/SendInput/SendInput";
import Items from "../../components/Items/Items";
import Clear from "../../components/Clear/Clear";

const AppView = ({classes,isLoading,currentList,onSearch,onAddItem,onChangeItem,onClear}) => {
    return (
    <div className={classes.container}>
        {isLoading ?
            <header className={classes.title}><CircularProgress color="secondary"/></header>
            : <>
                <header className={classes.header}>
                    <Typography variant="h4" className={classes.title}>
                        To Do List
                    </Typography>
                    <Search onSearch={onSearch}/>
                </header>
                <SendInput onAddItem={onAddItem}/>
                <Items items={sortBy(sortBy(currentList, item => item.check === true), item => item.star === false)}
                       onChangeItem={onChangeItem}
                />
                <Clear onClear={onClear}/>
            </>}
    </div>
    )
};

export default AppView;