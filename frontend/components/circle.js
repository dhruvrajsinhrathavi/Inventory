import react from "react";
import { StyleSheet,View,Image,Text} from "react-native";


const Circle = () => {
    return <View style={styles.productImgDiv}>
        <View style={styles.circle}>
            {/* <Image
                style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: 15,
                    marginTop: -15,
                }}
                contentFit="cover"
                source={require("../assets/productimg.png")}
            /> */}
            <View><Text style={{marginLeft:"5%", marginTop:"20%",textAlign: "center",color:"white",fontSize:23, }}>All</Text>
            <Text style={{marginLeft:"5%",textAlign: "center",color:"white",fontSize:23, }}>inventory</Text></View>
            
        </View>
       

    </View>

};

const styles = StyleSheet.create({
    circle: {
        width: "100%",
        height: "100%",
        right:"10%",
        borderRadius: 152,
        borderWidth:0.9,
        backgroundColor: '#b4846c',
      },

      productImgDiv: {
        // backgroundColor: "red",
        width: "30%",
        height: "15%",
        position:"absolute",
        right: "8%",
        top: "9%",
        // alignItems:"center",
      }
})

export default Circle;

