import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import CoachItem from '../../components/CoachItem'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="My Favorites" />
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

export default Favorites
