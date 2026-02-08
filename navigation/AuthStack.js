import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import BookingScreen from '../screens/BookingScreen';
import { searchResultsOptions, bookingScreenOptions } from './screenOptions';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} />
      <Stack.Screen name="Main" component={DrawerNavigator} options={{headerShown: false}}  />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={searchResultsOptions} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} options={bookingScreenOptions} />
    </Stack.Navigator>
  );
}
