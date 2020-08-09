import React from 'react'
import { View, Image, Text, Linking } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import outlineHeartIcon from '../../../assets/icons/heart-outline.png'
import filledHeartIcon from '../../../assets/icons/unfavorite.png'
import phoneIcon from '../../../assets/icons/whatsapp.png'
import { coach } from '../../interfaces/coach'

interface coachProps {
  coach: coach;
}

const CoachItem: React.FC<coachProps> = ({ coach }) => {
  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${coach.phone}`)
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
          <RectButton style={[styles.favoriteButton, styles.favorite]}>
            {/* <Image source={outlineHeartIcon} /> */}
            <Image source={filledHeartIcon} />
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

