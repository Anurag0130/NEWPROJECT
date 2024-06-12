import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import axios from 'axios';
const HomeScreen = ({ navigation }) => {
  const [imgUri, setImgUri] = useState(null);
  const [apiData, setApiData] = useState(null);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Image URI: ', response.assets[0].uri);
        setImgUri(response.assets[0].uri); // Set the URI directly without JSON.stringify
      }
    });
  };
  const getApiData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      console.log('Data is coming....');
      // console.log(response.data); // Access the data property of the response object
      setApiData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { data: "important data send from Homescreen to profile page" })}
      />
      <Button title="Open Camera" onPress={openCamera} />
      {imgUri != null && (
        <Image source={{ uri: imgUri }} style={styles.image} />
      )}
      <Button
        title="Get Api data"
        onPress={() => getApiData()}
      />
      {
        apiData != null ? <View>
          {console.log()}
          <Text>{apiData.title}</Text>
          <Text>{ }</Text>
        </View> : <ActivityIndicator />
      }
      {/* <ActivityIndicator /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: "space-around",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default HomeScreen;
