import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from "react-native";

import User from "./User";
import {getUsers} from "../services/api.service";

const Users = ({navigation}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item} nav={navigation}/>}
                keyExtractor={item => '' + item.id}/>
        </View>
    );
};

export default Users;

const styles = StyleSheet.create({});