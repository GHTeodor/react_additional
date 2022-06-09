import React from 'react';
import {StyleSheet} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';

import About from "./About";
import Company from "./Company";

const Drawer = createDrawerNavigator();

const Home = () => {
    return (
        <Drawer.Navigator initialRouteName="About">
            <Drawer.Screen name="Company" component={Company} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
};

export default Home;

const styles = StyleSheet.create({});