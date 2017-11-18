import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

/* 猫の詳細情報 */
const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.sex} {navigation.state.params.age}</Text>
    <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
  </View>
);

/* スタイル */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
  },
});

export default DetailScreen;
