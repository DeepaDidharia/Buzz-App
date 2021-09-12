import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from './Screens/fbScreen'
import instaScreen from './Screens/instaScreen'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FACEBOOK : {
    screen: fbScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/facebook.png")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "FACEBOOK"
    }
  },
  INSTAGRAM: {
    screen: instaScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/insta.png")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "INSTAGRAM"
    }
  }
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
