import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import CoachItem from '../../components/CoachItem'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import { coach } from '../../interfaces/coach'

const CoachList = () => {
  const [isFilterVisible, setFilterVisibility] = useState(false);
  const [area, setArea] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');
  const [coaches, setCoaches] = useState([]);

  const searchCoaches = async () => {
    const response = await api.get('sessions', {
      params: {
        area,
        week_day,
        time,
      },
    });
    setCoaches(response.data);
    setFilterVisibility(false);
  };

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
            <TextInput style={styles.input} value={area} onChangeText={text => setArea(text)} />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Weekday</Text>
                <TextInput style={styles.input} value={week_day} onChangeText={text => setWeekday(text)} />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput style={styles.input} value={time} onChangeText={text => setTime(text)} />
              </View>
            </View>
            <RectButton style={styles.submitButton} onPress={searchCoaches}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView style={styles.scroll} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}>
        {coaches.map((coach: coach) => <CoachItem coach={coach} key={coach.id} />)}
      </ScrollView>
    </View>
  )
}

export default CoachList
