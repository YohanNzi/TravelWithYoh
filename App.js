import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Card from './src/components/TravelCard';
import locations from './assets/data/locations';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AnimatedStack from './src/components/AnimatedStack';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import ProfileScreen from './src/screens/ProfileScreen';

Amplify.configure(config);

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
              <Pressable onPress={() => setActiveScreen('PROFILE')}>
                <FontAwesome name="user" size={24} color={activeScreen === 'PROFILE' ? activeColor : color} />
              </Pressable>
            </View>

            activeScreen === 'HOME' && <HomeScreen />
            activeScreen === 'CHAT' && <MatchesScreen />
            activeScreen === 'CHAT' && <ProfileScreen />

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

//export default App;
export default withAuthenticator(App);