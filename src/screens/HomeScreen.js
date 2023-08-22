import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../components/TravelCard';
import locations from '../../assets/data/locations';

import AnimatedStack from '../components/AnimatedStack';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const onSwipeLeft = location => {
    console.warn('swipe left', location.name);
  };

  const onSwipeRight = location => {
    console.warn('swipe right: ', location.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={locations}
        renderItem={({item}) => <Card location={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color="#FBD88B" />        
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={30} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={30} color="#3AB4CC" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={30} color="#4FCC94" />
        </View>
        <View style={styles.button}>
          <Ionicons name="flash" size={30} color="#A65CD2" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#ededed',
  }, 
});

export default HomeScreen;