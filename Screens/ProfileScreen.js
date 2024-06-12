import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation,route}) => {
    console.log(route.params)
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='Go to HomeScreen' onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

export default ProfileScreen