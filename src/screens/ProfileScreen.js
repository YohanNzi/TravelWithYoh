import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import { Auth, DataStore } from 'aws-amplify';
import { Location } from '../models';
import { TextInput } from 'react-native-gesture-handler';


const ProfileScreen = () => {
  const [name, setName] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [location, setLocation] = React.useState('');

  const isValid = () => {
    return name && bio && location;
   };  

  const save = () => { 
    if (!isValid()) {
      console.warn('Not valid');
      return;
    }

    const newLocation = new Location({
      name,
      bio,
      image: 'https://media.routard.com/image/81/5/baie-saintes-guadeloupe-ile.1515815.w630.jpeg',
    });

    DataStore.save(newLocation).then(() => {
      console.log('Location saved successfully!');
    }).catch((error) => {
      console.log('Error saving location', error);
    });
  };



  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        
        <TextInput style={styles.input } placeholder="Name..." value={name} onChangeText={setName}/>
        <TextInput style={styles.input } placeholder="location..." value={location} onChangeText={setLocation}/>
        <TextInput style={styles.input } placeholder="Bio..." multiline numberOfLines={5} value={bio} onChangeText={setBio}/>

        <Pressable onPress={save}>
          <Text style={styles.button}> Save </Text>
        </Pressable>

        <Pressable onPress={() => Auth.signOut()}>
          <Text style={styles.button}>Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: '#F63A6E',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,   
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F63A6E',
    margin: 10,
  },
  input: {
    margin: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});

export default ProfileScreen;