import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import CoachItem from '../../components/CoachItem'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const CoachList = () => {
  const [isFilterVisible, setFilterVisibility] = useState(false);
  function handleToggleFiltersVisibility() {
    setFilterVisibility(!isFilterVisible)
  }
  return (
    <View style={styles.container}>
      <PageHeader title="Coach List" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisibility}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Area</Text>
            <TextInput style={styles.input} />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Weekday</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput style={styles.input} />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
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
