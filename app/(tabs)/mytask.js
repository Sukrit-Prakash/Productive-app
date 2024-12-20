import { StyleSheet,Button } from 'react-native';
import TaskList from '@/components/ui/TaskList'; // Ensure TaskList is a valid named or default export
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams,useGlobalSearchParams } from 'expo-router';
import { useSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import {getUserTasks}from '../services/api'
export default function TaskScreen() {
  // const userId = "674ab742ead0a08bab8856c2"; // Fixed: Assigned directly
  // const { userId } = route.params;
  // const { userId } = useSearchParams();
  //  const {userId} =useLocalSearchParams();
   const {userId} =useGlobalSearchParams();
   console.log(userId)
  const [task, setTask] = useState([]);
const router = useRouter()
  useEffect(() => {
    const fetchTask = async () => {
      try {
        // Replace localhost with the appropriate IP address IS MUST
        // const response = await axios.get(`http://192.168.1.9:3000/api/tasks/${userId}`);
        // const response = getUserTasks(userId) ERROR
        const response = await getUserTasks(userId);
        // const response = await axios.get('http://192.168.1.41:8081/api/tasks/674ab742ead0a08bab8856c2');
        // Also an error

        // const response = await axios.get('http://192.168.21.1:3000/api/tasks/674ab742ead0a08bab8856c2');
        // console.log(response)
        setTask(response.data); // Ensure response.data contains the array of tasks
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };
    fetchTask();
  }, [userId]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Tasks</Text>
      <TaskList tasks={task} />
      {/* <Button onPress={()=>{router.navigate("addtask")}}>/add task<Button/> */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add Task"
          onPress={() => router.push('/addtask')} // Navigate to add-task page
          color="#0288d1"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  }
});
