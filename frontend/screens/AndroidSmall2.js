import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import styless from "./screen";
import Header from "../components/comman";
import { AppStateContext } from "../App";

const AndroidSmall2 = () => {
  const navigation = useNavigation();

  const {userData} = React.useContext(AppStateContext);

  React.useEffect(()=>{
    console.log(userData);
  })

  return (
    <View style={styles.androidSmall2}>
      <Header />
      {/* <Pressable
        style={[styles.androidSmall2Item, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("AndroidSmall3")}
      />
      <View
        style={[styles.androidSmall2Inner, styles.androidSmall2InnerLayout]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.androidSmall2InnerLayout]}
        onPress={() => navigation.navigate("AndroidSmall5")}
      /> */}

        <View style={styles.imgDiv}>
          <Pressable style={styles.imgContainer}
            onPress={() => navigation.navigate("AndroidSmall3")}
          >
            <Image
              style={styles.exportimg}
              contentFit="contain"
              source={require("../assets/import.png")}
            />
            <Text style={styles.text}>Import</Text>
          </Pressable>
          <Pressable style={styles.imgContainer}
            onPress={() => navigation.navigate("exportpage")}
          >
            <Image
              style={styles.exportimg}
              contentFit="contain"
              source={require("../assets/export.png")}
            />
            <Text style={styles.text}>Export</Text>
          </Pressable>
          <Pressable style={styles.imgContainer}
            onPress={() => navigation.navigate("transferpage")}
          >
            <Image
              style={styles.exportimg}
              contentFit="contain"
              source={require("../assets/transfer.png")}
            />
            <Text style={styles.text}>Transfer</Text>
          </Pressable>
          <Pressable style={styles.imgContainer}
            onPress={() => navigation.navigate("AndroidSmall3")}
          >
            <Image
              style={styles.exportimg}
              contentFit="contain"
              source={require("../assets/reportimg.png")}
            />
            <Text style={styles.text}>Report</Text>
          </Pressable>

      </View>
      <Image
        style={styless.footerimg}
        contentFit="cover"
        source={require("../assets/footerimg.png")}
      />
       <View style={styless.nextPressable}>
      <Pressable
        style={styless.button}
        onPress={() => navigation.navigate("AndroidSmall4")}
      ><Text style={styless.text}>All Inventory</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSmall2: {
    backgroundColor: '#FCDEC0',
    display: "flex",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  exportimg:{
    // aspectRatio:7/8,
    // objectfit: "scale-down",
    // width: '60%',
    // height: "35%",
    aspectRatio:5/4 ,

  },
  imgContainer: {
    display:"flex",
    width:"40%",
    maxwidth: "50%",
    padding: 4,
    backgroundColor:"#B4846C",
    height:"46%",
    maxHeight:"90%",
    marginLeft:"6%",
    marginTop:"6%",
    borderRadius:10,
    // aspectRatio:5/6 ,
    // objectfit:"contain",
    
  },
  imgDiv: {
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"flex-start",
    maxheight:"80%",
    Maxwidth:"90%",
    // marginTop:"20%",
    // marginLeft:"10%"
  },
  text: {
    color:"white",
    textAlign: "center",
    fontSize:20
  }

});

export default AndroidSmall2;