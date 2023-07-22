import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import styless from './screen';
import Header from "../components/comman";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";


const AndroidSmall3 = () => {
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    name: "",
    desc: "",
    quantity: 0,
    minQuantity: 0,
    price: 0,
    source: "",
    department: "default",
    thumbnail: "",
  });

  const handelAddNewItem = async () => {
    try {
      const response = await axios.post("http://192.168.149.136:5000/api/addNew", {
        name: data.name,
        desc: data.desc,
        quantity: data.quantity,
        price: data.price,
        source: data.source,
        minQuantity: data.minQuantity,
        thumbnail: data.thumbnail,
        department: data.department,
        currDepartment: "defaut department",
      });

      if(response.data.added === true) {
        console.log("New Product Added") 
        navigation.navigate("AndroidSmall4")
      } else {
        console.log("new product not added");
        setData({
          name: "",
          desc: "",
          quantity: 0,
          minQuantity: 0,
          price: 0,
          source: "",
          department: "default",
          thumbnail: "",
        });
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.androidSmall3}>
      <Header />
      {/* <Image
        style={styless.footerimg}
        contentFit="cover"
        source={require("../assets/footerimg.png")}
      /> */}
      <View style={styles.productImgDiv}>
        <View style={styles.circle}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              marginBottom: 15,
              marginTop: -15,
            }}
            contentFit="cover"
            source={require("../assets/productimg.png")}
          />
          <Text style={{ marginTop: 5, textAlign: "center" }}>Product Image</Text>
        </View>

      </View>
      <KeyboardAwareScrollView style={styles.inputFields}>
        <ScrollView >
          <TextInput
            style={styles.textInputs}
            multiline={false}
            placeholder="Enter Product Name"
            value={data.name}
            onChangeText={(v) => setData({ ...data, name: v })}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            multiline={true}
            placeholder="Enter Product Description"
            value={data.desc}
            onChangeText={(v) => setData({ ...data, desc: v })}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            multiline={false}
            placeholder="Enter Quantity"
            value={data.quantity}
            onChangeText={(v) => setData({ ...data, quantity: parseInt(v) })}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            multiline={false}
            placeholder="Enter Price"
            value={data.price}
            onChangeText={(v) => setData({ ...data, price: parseInt(v) })}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            multiline={false}
            placeholder="Enter Source"
            value={data.source}
            onChangeText={(v) => setData({ ...data, source: v })}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            multiline={false}
            placeholder="Minimun Quantity"
            value={data.minQuantity}
            onChangeText={(v) => setData({ ...data, minQuantity: parseInt(v) })}
          ></TextInput>
        </ScrollView>
      </KeyboardAwareScrollView>


      <View style={styless.nextPressable}>
        <Pressable
          style={styless.button}
          onPress={() => {
            handelAddNewItem();
          }}
        >
          <Text style={styless.text}>Submit</Text>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  androidSmall3: {
    backgroundColor: '#FCDEC0',
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
  },
  textInputs: {
    // backgroundColor: "dodgerblue",
    borderWidth: 0.8,
    borderColor: '#000',
    padding: 5,
    width: 360,
    height: 50,
    borderRadius: 8,
    marginBottom: 20,
    overflow: "scroll",
  },
  inputFields: {
    display: "flex",
    // justifyContent:"center",
    alignSelf: "center",
    marginTop: "32%",
    height: "40%",
    maxHeight: "60%",
    marginBottom: "10%",
    overflow: "scroll",
    textAlign: "center",
  },
  circle: {
    width: "150%",
    height: "560%",
    right: "10%",
    borderRadius: 152,
    borderWidth: 0.9,
    backgroundColor: '#b4846c',
  },

  productImgDiv: {
    // backgroundColor: "red",
    position: "absolute",
    right: "10%",
    top: "9%",
    alignItems: "center",
  }
});

export default AndroidSmall3;
