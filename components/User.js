import React from 'react';
import {StyleSheet, Button, Text, View} from "react-native";

const User = ({item, nav:{navigate}}) => {
    const onPress = () => {
        navigate('UserDetails', {data: item});
    };

    return (
        <View style={[styles.userBox]}>
            <Text style={styles.align}>{item.name}</Text>
            <Button title={'user details'} onPress={onPress}/>
        </View>
    );
};

export default User;

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'silver',
        marginBottom: 3,
        width: '70%'
    },
    align: {
        height: '2rem',
        textAlign: 'center'
    }
});