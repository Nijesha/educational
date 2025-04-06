import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import BookmarksScreen from "../screens/BookmarkScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen} />
                <Stack.Screen
                    name='DetailsScreen'
                    component={DetailsScreen} />

                <Stack.Screen
                    name='BookmarksScreen'
                    component={BookmarksScreen} />

            </Stack.Navigator>
        </>
    )
}

export default StackNavigator;