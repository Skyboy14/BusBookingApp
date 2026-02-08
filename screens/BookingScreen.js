// BookingScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TOTAL_ROWS = 10;
const SEATS_PER_ROW = 4;

const generateSeats = () => {
  let seats = [];
  for (let i = 0; i < TOTAL_ROWS * SEATS_PER_ROW; i++) {
    seats.push({ id: i + 1, booked: Math.random() < 0.3 }); // 30% booked
  }
  return seats;
};

export default function BookingScreen({ route }) {
  const { from, to, date, bus } = route.params;
  const [seats, setSeats] = useState(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const busName = bus?.name || `${bus?.type || 'Bus'} ${bus?.id || ''}`;

  const toggleSeat = (seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    if (seat.booked) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeat = ({ item }) => {
    const isSelected = selectedSeats.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.seat, item.booked ? styles.booked : isSelected ? styles.selected : styles.available]}
        onPress={() => toggleSeat(item.id)}
        disabled={item.booked}
      >
        <Text style={styles.seatText}>{item.id}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking for {busName}</Text>
      <Text>{from} → {to} on {date}</Text>
      <FlatList
        data={seats}
        renderItem={renderSeat}
        keyExtractor={(item) => item.id.toString()}
        numColumns={SEATS_PER_ROW}
        contentContainerStyle={styles.seatContainer}
      />

      <Text style={styles.footer}>Selected Seats: {selectedSeats.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  seatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  seat: {
    width: 60,
    height: 60,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  seatText: {
    fontWeight: 'bold'
  },
  booked: {
    backgroundColor: '#ccc'
  },
  selected: {
    backgroundColor: '#4CAF50'
  },
  available: {
    backgroundColor: '#fff'
  },
  footer: {
    marginTop: 20,
    fontSize: 16
  }
});
