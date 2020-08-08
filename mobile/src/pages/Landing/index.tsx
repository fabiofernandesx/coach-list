import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

import landingImg from '../../../assets/landing.png'
import studyIcon from '../../../assets/icons/study.png'
import giveClasses from '../../../assets/icons/give-classes.png'
import heartIcon from '../../../assets/icons/heart.png'

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Welcome to Coach List, {'\n'}
        <Text style={styles.titleBold}> Select your option</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text>Find a Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClasses} />
          <Text>I'm a Coach</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        285 connections already made {'  '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
