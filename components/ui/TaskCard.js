import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const TaskCard = ({ task }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.taskTitle}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.status}>
        {/* {task.status ? 'Completed' : 'In Progress'} */}
        {task.status}
      </Text>
      <Text style={styles.priority}> Priority : {task.priority}        {task.dueDate}</Text>
    </View>
  );
};

// userId: { type: String, required: true },
// taskTitle: { type: String, required: true },
// description: { type: String },
// dueDate: { type: Date },
// priority: { type: String, enum: ['low', 'medium', 'high'] },
// status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
// createdAt: { type: Date, default: Date.now },

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  description: { color: '#555', marginVertical: 8 },
  status: { fontSize: 12, color: '#0288d1' },
  priority:{fontSize: 10, color: 'green',textAlign:'right'}
});

export default TaskCard;
