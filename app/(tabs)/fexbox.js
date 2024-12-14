import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Calendar library for UI
import axios from 'axios';

export default function HomeScreen() {
  const [moods, setMoods] = useState({});
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const userId = '67573c10249083a2becefadb'; // Replace with dynamic user ID if needed

  // Fetch user moods and update the calendar
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(`http://192.168.1.47:3000/api/moods/${userId}`);
        const moodData = response.data.reduce((acc, mood) => {
          acc[mood.date] = { marked: true, dotColor: getMoodColor(mood.mood) }; // Ensure date is in YYYY-MM-DD format
          return acc;
        }, {});
        setMoods(moodData);
      } catch (error) {
        console.log('Error fetching moods:', error);
      }
    };

    fetchMoods();
  }, []);

  // Fetch tasks for a specific date
  const fetchTasks = async (date) => {
    try {
      const response = await axios.get(`http://192.168.1.47:3000/api/tasks/${userId}?date=${date}`);
      setTasks(response.data); // Expect tasks filtered by the API
    } catch (error) {
      console.log('Error fetching tasks:', error);
      Alert.alert('Error', 'Failed to fetch tasks for the selected date.');
    }
  };

  // Handle date selection
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString); // YYYY-MM-DD format
    fetchTasks(day.dateString);
  };

  // Get color for mood dots
  const getMoodColor = (mood) => {
    switch (mood) {
      case 'happy':
        return 'green';
      case 'neutral':
        return 'orange';
      case 'sad':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Calendar</Text>

      {/* Calendar Component */}
      <Calendar
        markedDates={{
          ...moods,
          [selectedDate]: { selected: true, selectedColor: '#0288d1' },
        }}
        onDayPress={handleDayPress}
        theme={{
          selectedDayBackgroundColor: '#0288d1',
          todayTextColor: '#0288d1',
          dotColor: 'red',
          arrowColor: '#0288d1',
        }}
        style={styles.calendar}
      />

      <Text style={styles.subHeader}>Tasks for {selectedDate || 'the selected date'}</Text>

      {/* Tasks List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.taskTitle}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskDueDate}>Due: {item.dueDate?.split('T')[0]}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noTasks}>No tasks for the selected day</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
  calendar: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    padding: 10,
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 10,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    marginVertical: 4,
    color: '#757575',
  },
  taskDueDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#0288d1',
  },
  noTasks: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginTop: 20,
  },
});
