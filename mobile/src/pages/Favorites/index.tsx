import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import CoachItem from '../../components/CoachItem'
import { coach } from '../../interfaces/coach'

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritesArray = JSON.parse(response);
        setFavorites(favoritesArray);
      }
    });
  }

  useEffect(() => {
    loadFavorites();
  }, [])
  return (
    <View style={styles.container}>
      <PageHeader title="My Favorites" />
      <ScrollView style={styles.scroll} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}>
        {favorites.map((coach: coach) => <CoachItem coach={coach} key={coach.id} favorite={true} />)}
      </ScrollView>
    </View>
  )
}

export default Favorites
