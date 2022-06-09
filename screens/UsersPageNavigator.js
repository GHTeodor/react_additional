import React from 'react';
import {StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

import Users from "../components/Users";
import UserDetailsScreen from "./UserDetails.screen";

const StackNavigator = createStackNavigator();

const UsersPageNavigator = () => {

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'users'} component={Users}/>
            <StackNavigator.Screen name={'UserDetails'} component={UserDetailsScreen}/>
        </StackNavigator.Navigator>
    );
};

export default UsersPageNavigator;

const styles = StyleSheet.create({});