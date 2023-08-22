import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Card from './src/components/TravelCard';
import users from './assets/data/users';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AnimatedStack from './src/components/AnimatedStack';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';

const App = () => {
  const [activeScreen, setActiveScreen] = React.useState('HOME');

  const color = '#b5b5b5';
  const activeColor = '#F76C6B';
  return (
    <SafeAreaView style={styles.root}>
      <GestureHandlerRootView>
          <View style={styles.pageContainer}>
            <View style={styles.topNavigation}>
              <Pressable onPress={() => setActiveScreen('HOME')}>
                <Fontisto name="tinder" size={24} color={ activeScreen === 'HOME' ? activeColor : color} />
              </Pressable>
              <MaterialCommunityIcons name="star-four-points" size={24} color={color} />
              <Pressable onPress={() => setActiveScreen('CHAT')}>
                <Ionicons name="ios-chatbubbles" size={24} color={activeScreen === 'CHAT' ? activeColor : color} />
              </Pressable>
              <FontAwesome name="user" size={24} color={color} />
            </View>

            {activeScreen === 'HOME' && <HomeScreen />}
            {activeScreen === 'CHAT' && <MatchesScreen />}
        {/* <HomeScreen /> */
        /* <Card user={users[0]} /> */
        /* <Card user={users[1]} /> */
        /* <Card user={users[2]} /> */
        /* <Card user={users[3]} /> */
        /* <Card user={users[4]} /> */}
          </View>
      </GestureHandlerRootView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white', 
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topNavigation: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;