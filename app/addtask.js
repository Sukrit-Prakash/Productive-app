import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

const AddTask = () => {
  const router = useRouter();

  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const userId = '67573c10249083a2becefadb'; // Hardcoded for testing. Replace with dynamic user ID.

  const handleAddTask = async () => {
    if (!taskTitle || !priority || !dueDate) {
      Alert.alert('Error', 'Please fill out all required fields (Task Title, Priority, Due Date).');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.47:3000/api/tasks', {
        userId,
        taskTitle,
        description,
        dueDate,
        priority,
      });

      console.log('Task added successfully:', response.data);
      Alert.alert('Success', 'Task added successfully!');
      setTaskTitle('');
      setDescription('');
      setDueDate('');
      setPriority('');
      router.push('/mytask'); // Navigate back to tasks page
    } catch (err) {
      console.error('Error adding task:', err.message);
      Alert.alert('Error', 'Failed to add task. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Task</Text>

      <TextInput
        placeholder="Task Title *"
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <TextInput
        placeholder="Description"
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        placeholder="Due Date (YYYY-MM-DD) *"
        style={styles.input}
        value={dueDate}
        onChangeText={setDueDate}
      />

      <TextInput
        placeholder="Priority (low, medium, high) *"
        style={styles.input}
        value={priority}
        onChangeText={setPriority}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0288d1',
    padding: 15,
    borderRadius: 5,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTask;
