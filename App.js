import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Alert } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { Linking } from 'react-native';
import axios from 'axios';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const obj = {
    name: "anurag",
    age: 21,
    class: "12thPass"
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
      console.log("Data saved");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getApiData()
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerStyle: {
              backgroundColor: "red",
              // color:"#fff"
            },
            headerTitleStyle: {
              color: "#fff"
            },
            // headerTitle:()=><Button title='Brother idhar'/>
            headerRight: () => <Button title='Brother idhr' onPress={() => Linking.openURL('https://youtu.be/3o1ctKc8w6Y?si=fjZ0DKSDt-Q0fpR2')} />
            // headerTintColor:"green" 
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerRight: () => <TextInput style={{ borderWidth: 1 }} placeholder='click kr bhai ' />
        }} />
      </Stack.Navigator>

      {/* <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen} />
      </Drawer.Navigator> */}

      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}

    </NavigationContainer>




    // <View style={styles.container}>
    //   <TouchableOpacity style={styles.button} onPress={() => storeData(obj)}>
    //     <Text style={{ color: "#fff" }}>SaveData</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.button} onPress={getData}>
    //     <Text style={{ color: "#fff" }}>getData</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.button} onPress={homePage}>
    //     <Text style={{ color: "#fff" }}>Go to HomePage</Text>
    //   </TouchableOpacity>
    // </View>
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    backgroundColor: "blue",
    margin: 12,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
  },
});

export default App;
