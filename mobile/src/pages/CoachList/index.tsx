import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import CoachItem from '../../components/CoachItem'
import { ScrollView } from 'react-native-gesture-handler'

const CoachList = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Coach List" />
      <ScrollView style={styles.scroll} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}>
        <CoachItem />
        <CoachItem />
        <CoachItem />
        <CoachItem />
      </ScrollView>
    </View>
  )
}

export default CoachList
