import React, { useRef } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/config/RootNavigation";
import utils from "./app/utils";
import StackNavigator from "./app/navigations/StackNavigator";
import AppColors from "./app/config/colors";

const App = () => {

  const routeNameRef = useRef<any | null>(null);
  const navigationRef2 = useRef<any | null>(null);
  
  return(
    <View style={styles.container}>
      <NavigationContainer ref={(ref) => {
        navigationRef.current = ref;
        navigationRef2.current = ref;
      } }
      onReady={() => {
        routeNameRef.current = navigationRef2.current.getCurrentRoute().name;
        utils.UserSession.CURRENT_VIEWING_PAGE = navigationRef2.current.getCurrentRoute().name;
      }}
      onStateChange={() => {
        utils.UserSession.PREVIOUS_VIEWED_PAGE = utils.UserSession.CURRENT_VIEWING_PAGE;
        utils.UserSession.CURRENT_VIEWING_PAGE = navigationRef2.current.getCurrentRoute().name;
        const currentRouteName = navigationRef2.current.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}>
        <StatusBar barStyle="dark-content" translucent backgroundColor={AppColors.COLOR_TRASPARENT} />
        <StackNavigator />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;