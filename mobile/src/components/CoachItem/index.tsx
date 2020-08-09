import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import outlineHeartIcon from '../../../assets/icons/heart-outline.png'
import filledHeartIcon from '../../../assets/icons/unfavorite.png'
import phoneIcon from '../../../assets/icons/whatsapp.png'

const CoachItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://i.pravatar.cc/150?img=51' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.area}>LifeCoach</Text>
        </View>
      </View>
      <Text style={styles.bio}>Lorem ipsum dolor sit amet</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Price per session{'   '} <Text style={styles.priceValue}>USD$ 80.00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorite]}>
            {/* <Image source={outlineHeartIcon} /> */}
            <Image source={filledHeartIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={phoneIcon} />
            <Text style={styles.contactButtonText}>Contact the coach</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default CoachItem

