import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // const [quotes, setQuotes] = useState([]); // State to store quotes
  const [quotes, setQuotes] = useState();
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch quotes when the component mounts
  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quote); // Assuming 'quotes' is the key holding the array
        console.log(quotes)
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Handle any errors and stop loading
      });
  }, []); // Empty dependency array ensures this runs only once, after the component mounts

  if (loading) {
    return <Text>Loading...</Text>; // Render loading text until data is fetched
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Quotes</ThemedText>
      <View >
        <Text style={styles.quoteText}>{quotes}</Text></View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:''
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  quoteContainer: {
    marginBottom: 8,
  },
  quoteText: {
    fontSize: 16,
    color: 'lightgreen',
  },
});
