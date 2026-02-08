import React, { useState } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const today = new Date();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(today);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 2); // +2 months limit

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDate = (d) => {
    return d.toISOString().split('T')[0]; // Format: yyyy-mm-dd
  };

  const navigation = useNavigation();

  const handleSearch = () => {
    if (!from || !to || !date) return;

  navigation.navigate('SearchResults', {
    from,
    to,
    date: formatDate(date),
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From</Text>
      <Picker
        selectedValue={from}
        onValueChange={(itemValue) => setFrom(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Departure City" value="" />
        <Picker.Item label="Pune" value="Pune" />
        <Picker.Item label="Mumbai" value="Mumbai" />
        <Picker.Item label="Delhi" value="Delhi" />
      </Picker>

      <Text style={styles.label}>To</Text>
      <Picker
        selectedValue={to}
        onValueChange={(itemValue) => setTo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Arrival City" value="" />
        <Picker.Item label="Pune" value="Pune" />
        <Picker.Item label="Mumbai" value="Mumbai" />
        <Picker.Item label="Delhi" value="Delhi" />
      </Picker>

      <Text style={styles.label}>Date</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          mode="outlined"
          value={formatDate(date)}
          style={styles.input}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
          minimumDate={today}
          maximumDate={maxDate}
        />
      )}

      <Button
        mode="contained"
        onPress={handleSearch}
        style={styles.button}
        disabled={!from || !to || !date}
      >
        Search
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  picker: {
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
});
