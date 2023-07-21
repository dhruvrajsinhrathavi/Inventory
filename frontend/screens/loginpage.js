import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, View, Pressable, Text,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { color } from "react-native-reanimated";
import Header from '../components/comman'
import axios from "axios";


const Loginpage = () => {

  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const hadelLogin = async() => {
    if(username.length > 0) {
      try{
        const response = await axios.post("http://192.168.149.136:5000/api/user/login" , {
          email:username,
          password
        })
        response.data.loggedin ? navigation.navigate("AndroidSmall2") : console.log("invalid credentials");;
      } catch (err) {
        console.log(err);
      }
    }
  }


    return (
    <View style={styles.androidSmall1}>

    <Header />
    
    <View style={styles.loginImgContainer}>
      <Image 
      style={styles.loginimg}
        contentFit="contain"
        source={require("../assets/loginimg.png")}
      />
    </View>


    <View style={styles.textInputContainer}>
    <Text style={styles.logindetails}>Login Details</Text>
      <TextInput
        style={styles.inputtext1}
        onChangeText={(val)=> setUsername(val)}
        placeholder="username or mail address"
        value={username}
      />
      <TextInput
        style={styles.inputtext2}
        onChangeText={(val)=> setPassword(val)}
        placeholder="password"
        value={password}
      /> 
    </View>
    {/* <ImageBackground
      source={require("../assets/footerimg.png")}
      style={{width: "100%"}}
    > */}
      <View style={styles.nextPressable}>
        <Pressable style={styles.button} 
          onPress={()=>{
              hadelLogin();
          }}
        >
          <Text style={styles.text} color="white">Login</Text>
        </Pressable>
      </View>
    {/* </ImageBackground> */}
    {/* <View style={styles.footerimgContainer}>
      <ImageBackground
        style={styles.footerimg}
        contentFit="cover"
        source={require("../assets/footerimg.png")}
      />
    </View> */}
  </View>
  
  );
};

const styles = StyleSheet.create({

  androidSmall1: {
    backgroundColor: '#FCDEC0',
    flex: 1,
    overflow: "hidden",
  },
  loginImgContainer: {
    width: '70%',
    height: '35%',
    alignSelf: "center",
    // backgroundColor: "red",
    justifyContent: "center"
  },
  loginimg: {
    // flex: 1,
    height:"80%",
    width:"80%",
    Maxheight: "100%",
    Maxwidth: '100%',
    alignSelf: "center",
  },
  textInputContainer: {
    width: "90%",
    height: "20%",
    alignSelf: "center",
    justifyContent:"center",
    alignItems: "center",
    marginBottom: "20%"
  },
  inputtext1: {
    width: "100%",
    height: "35%",
    borderWidth: 1,
    marginBottom: "5%",
    borderRadius: 8,
    textAlign:"center",
  },
  inputtext2: {
    width: "100%",
    height: "35%",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center"
  },
  logindetails: {
    alignSelf: "flex-start",
    marginBottom: "5%",
    marginTop: "5%",
    fontSize: 22,
    textShadowColor: "gray"
  },
  nextPressable: {
    backgroundColor: "#7d5a50",
    width: "90%",
    height: "6%",
    justifyContent: "center",
    borderRadius: 8,
    position: "absolute",
    alignSelf: "center",
    textAlign:"center",
    bottom: "3%",
    color: "white",
  },

  button: {
    textAlign: "center"
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize:18
  }
  
});

export default Loginpage;
