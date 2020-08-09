import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import outlineHeartIcon from '../../../assets/icons/heart-outline.png'
import filledHeartIcon from '../../../assets/icons/unfavorite.png'
import phoneIcon from '../../../assets/icons/whatsapp.png'
import { coach } from '../../interfaces/coach'

interface coachProps {
  coach: coach;
  favorite: boolean;
}

const CoachItem: React.FC<coachProps> = ({ coach, favorite }) => {
  const [isFavorite, setAsFavorite] = useState(favorite)
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${coach.phone}`)
  }
  async function toggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((coachItem: coach) => { return coachItem.id === coach.id });
      favoritesArray.splice(favoriteIndex, 1);
    } else {
      favoritesArray.push(coach);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    setAsFavorite(!isFavorite)
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: coach.avatar }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{coach.name}</Text>
          <Text style={styles.area}>{coach.area}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{coach.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Price per session{'   '} <Text style={styles.priceValue}>USD$ {coach.price}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, isFavorite ? styles.favorite : {}]} onPress={toggleFavorite}>
            {isFavorite ? <Image source={filledHeartIcon} /> : <Image source={outlineHeartIcon} />}
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
            <Image source={phoneIcon} />
            <Text style={styles.contactButtonText}>Contact the coach</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default CoachItem

