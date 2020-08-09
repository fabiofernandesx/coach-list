import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="My Favorites" />
    </View>
  )
}

export default Favorites
