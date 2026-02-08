// navigation/screenOptions.js

export const homeScreenOptions = {
  title: 'Search Bus',
  headerStyle: {
    backgroundColor: '#f7f7f7',
    height: 80,
  },
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerTitleAlign: 'center',
};

export const searchResultsOptions = ({ route }) => ({
  title: `${route.params?.from} ➔ ${route.params?.to}`,
  headerStyle: {
    backgroundColor: '#f7f7f7',
    height: 80,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  headerTitleAlign: 'center',
});

export const bookingScreenOptions = {
  headerShown: false, // full screen for booking
};
