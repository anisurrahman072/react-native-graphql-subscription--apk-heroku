import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//screens
import Posts from './src/screens/Post.screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size = 23}) => {
            let iconName;
            switch (route.name) {
              case 'Posts':
                iconName = 'ios-information-circle';
                break;
              default:
                iconName = 'ios-information-circle';
            }
            // You can return any component that you like here!
            return (
              <Icon name={iconName} type={'ionicon'} size={26} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'dimgray',
          style: {
            backgroundColor: '#191E26',
          },
        }}>
        <Tab.Screen name="Posts" component={Posts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginHorizontal: wp('5%'),
  },
});
