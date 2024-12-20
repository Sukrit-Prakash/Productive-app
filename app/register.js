import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.1.9:3000/api/users/register', {
        username,
        email,
        password,
      });
    //   const router = useRouter();
      console.log('Registration successful:', response.data);
      setSuccessMessage('Registration successful! Please login.');
      setError('');
    //   router.navigate("./login")
      // Navigate to login screen after successful registration
    //   navigation.navigate('login');
    
    } catch (err) {
      console.error('Error during registration:', err.response?.data || err.message);
      setError('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("login")}>
        <Text style={styles.link}>Already have an account? Login</Text>
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
  success: { color: 'green', marginBottom: 8 },
});

export default RegisterScreen;
