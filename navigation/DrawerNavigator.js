import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UpcomingRidesScreen from '../screens/UpcomingRidesScreen';
import CompletedRidesScreen from '../screens/CompletedRidesScreen';
import CancelledRidesScreen from '../screens/CancelledRidesScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
      <Drawer.Screen name="Upcoming Rides" component={UpcomingRidesScreen} />
      <Drawer.Screen name="Completed Rides" component={CompletedRidesScreen} />
      <Drawer.Screen name="Canceled Rides" component={CancelledRidesScreen} />
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
}
