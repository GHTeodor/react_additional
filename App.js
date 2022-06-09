import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Users from "./components/Users";
import Home from "./components/Home";
import UserDetailsScreen from "./screens/UserDetails.screen";
import UsersPageNavigator from "./screens/UsersPageNavigator";

const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function App() {

    return (
        // todo Lesson 3
        <NavigationContainer>
            <BottomTabNavigator.Navigator tabBarOption={{tabBarStyle: {backgroundColor: "tomato"}}}>
                <BottomTabNavigator.Screen name={'users'} component={UsersPageNavigator}/>
                <BottomTabNavigator.Screen name={'home'} component={Home}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>

        // todo Lesson 2
        // <NavigationContainer>
        //     <StackNavigator.Navigator initialRouteName="Users">
        //         <StackNavigator.Screen name={'Home'} component={Home}/>
        //         <StackNavigator.Screen name={'Users'} component={Users}/>
        //         <StackNavigator.Screen name={'UserDetails'} component={UserDetailsScreen}/>
        //     </StackNavigator.Navigator>
        // </NavigationContainer>


        // todo Lesson 1
        // <View style={styles.container}>
        //   <StatusBar style="auto" />
        //   <Users/>
        // </View>
    );
}

const styles = StyleSheet.create({
  container: {}
});

// 1. install expo cli (npm install -g expo-cli)
// 2. App "Expo Go"
// 3. expo init (expo init my-project)
// run expo start || npm start