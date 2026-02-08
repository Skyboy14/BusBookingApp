import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  const handleLogout = () => {
    // Navigate to login
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        labelStyle={styles.logoutLabel}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutLabel: {
    color: 'red',
    fontWeight: 'bold',
  },
});
