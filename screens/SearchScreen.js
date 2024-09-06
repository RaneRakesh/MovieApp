import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = (searchTerm) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.show.image ? item.show.image.medium : 'https://via.placeholder.com/150' }} 
        style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.show.name}</Text>
          <Text numberOfLines={3} style={styles.summary}>
            {item.show.summary ? item.show.summary.replace(/<[^>]+>/g, '') : 'No summary available...'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.searchBar}
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => searchMovies(query)}
      />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.show.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  itemContainer: { flexDirection: 'row', marginBottom: 10 },
  thumbnail: { width: 100, height: 150 },
  textContainer: { flex: 1, marginLeft: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  summary: { fontSize: 14, color: 'gray' },
  searchBar: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginBottom: 10 },
});

export default SearchScreen;
