import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import styles from './styles'
import bgImage from '../../../assets/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const CoachRegister = () => {
  const { goBack } = useNavigation();
  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='contain' source={bgImage} style={styles.content}>
        <Text style={styles.title} >Are you a coach?</Text>
        <Text style={styles.description} >That's awesome. To Start using our app, you just need to access our web platform and fill a quick form</Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={handleNavigationBack}>
        <Text style={styles.okButtonText}>OK</Text>

      </RectButton>
    </View>
  )
}

export default CoachRegister
