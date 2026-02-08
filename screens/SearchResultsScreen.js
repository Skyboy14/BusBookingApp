// screens/SearchResultsScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mockBuses = [
  {
    id: '1',
    name: 'AC Sleeper 101',
    time: '10:00 AM',
    fare: 500,
    type: 'AC Sleeper',
  },
  {
    id: '2',
    name: 'Seater Express 202',
    time: '12:30 PM',
    fare: 350,
    type: 'Non-AC Seater',
  },
  {
    id: '3',
    name: 'Luxury Semi 303',
    time: '5:45 PM',
    fare: 650,
    type: 'Luxury Semi-Sleeper',
  },
];

export default function SearchResultsScreen({ route, navigation }) {
  const { from, to, date } = route.params;

  const handleBusSelect = (bus) => {
    navigation.navigate('BookingScreen', {
      bus,
      from,
      to,
      date,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{from} → {to}</Text>
      <Text style={styles.date}>Date: {date}</Text>

      <FlatList
        data={mockBuses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleBusSelect(item)}>
            <Text style={styles.time}>{item.name} — Departure: {item.time}</Text>
            <Text>Fare: ₹{item.fare}</Text>
            <Text>Type: {item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    marginBottom: 15,
    color: 'gray',
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  time: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
