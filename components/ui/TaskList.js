import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  // const index=0
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <TaskCard task={item} />}
    />
  );
};

export default TaskList;
