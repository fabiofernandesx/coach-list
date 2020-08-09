import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../../assets/landing.png'
import studyIcon from '../../../assets/icons/study.png'
import giveClasses from '../../../assets/icons/give-classes.png'
import heartIcon from '../../../assets/icons/heart.png'

const Landing = () => {
  const { navigate } = useNavigation();

  function handleNavigateToCoachRegisterPage() {
    navigate("CoachRegister")
  }
  function handleNavigateToCoachesPages() {
    navigate('Coaches')
  }
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Welcome to Coach List, {'\n'}
        <Text style={styles.titleBold}> Select your option</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToCoachesPages}>
          <Image source={studyIcon} />
          <Text>Find a Coach</Text>
        </RectButton>
        <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToCoachRegisterPage}>
          <Image source={giveClasses} />
          <Text>I'm a Coach</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        285 connections already made {'  '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
