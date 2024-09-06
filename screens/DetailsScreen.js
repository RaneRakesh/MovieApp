import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.image ? movie.image.original : 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No summary available...'}</Text>
      {/* Add more details as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  image: { width: '100%', height: 400, resizeMode: 'cover', marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  summary: { fontSize: 16, color: 'gray' },
});

export default DetailsScreen;
