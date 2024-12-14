import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter();
  const handleLogin = async () => {
    try {
      // sometimes the ip changes please make sure that it is working
      const response = await axios.post('http://192.168.1.47:3000/api/users/login', {
        email,
        password,
      });
      // const { userId } = response.data.userId; // Ensure the API returns userId on successful login
      // const userId = response.data.userId; 
      const userId = response.data._id;
     console.log(response.data.userId)

      // Navigate to TaskScreen and pass userId as a parameter
      // navigation.navigate('mytask', { userId });
      // router.push(`/mytask?userId=${userId}`);
      router.push({
        pathname: '/mytask',
        params: { userId: userId },
      });
      
      // router.push(`/mytask?userId=${"674ab742ead0a08bab8856c2"}`);
      // 674ab742ead0a08bab8856c2
    } catch (err) {
      console.error('Error during login:', err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("/register") }>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: 'lightblue' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { width: '100%', padding: 8, marginVertical: 8, borderColor: '#ccc', borderWidth: 1, borderRadius: 4 },
  button: { backgroundColor: '#0288d1', padding: 12, borderRadius: 4, marginTop: 16 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { marginTop: 16, color: '#0288d1' },
  error: { color: 'red', marginBottom: 8 },
});

export default LoginScreen;
