import * as React from "react";
import { Image } from "expo-image";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import { FontSize } from "../GlobalStyles";
import axios from "axios";
import { AppStateContext } from "../App";
import { log } from "react-native-reanimated";

export default function Productdescrip() {

    const {productName} = React.useContext(AppStateContext);
    const [productDetails , setProductDetails] = React.useState({});

    const getDataAboutProduct = async () => {
        console.log(productName);
        const response = await axios.get("http://192.168.149.136:5000/api/getSpecificProduct/"+productName);
 
        setProductDetails(response.data);

        // console.log(productDetails);
    }
    
    React.useEffect(()=>{
        getDataAboutProduct();
        // console.log(productDetails);
    },[]);


    return (
        // <View>
        <ScrollView style={style.scroll} >
            <View style={style.productlay}>
                <Pressable>
                    <View style={style.product}>
                    <View style={style.textbg}>
                        <Text style={{color:"white"}}>Product Name</Text>
                    </View>
                        <Text style={style.text}>{productName}</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={style.product}>
                    <View style={style.textbg}>
                        <Text style={{color:"white"}}>product quantity</Text>
                    </View>
                        <Text style={style.text}>{productDetails?.stock}</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={style.product}>
                    <View style={style.textbg}>
                        <Text style={{color:"white"}}>product description</Text>
                    </View>
                        <Text style={style.text}>{productDetails?.descreption}</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={style.product}>
                    <View style={style.textbg}>
                        <Text style={{color:"white"}}>product price</Text>
                    </View>
                        <Text style={style.text}>{productDetails?.price}</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={style.product}>
                    <View style={style.textbg}>
                        <Text style={{color:"white"}}>minimum stock</Text>
                    </View>
                        <Text style={style.text}>{productDetails?.minStock}</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={style.product}>
                    <View style={style.textbg}>
                        <Text style={{color:"white"}}>product source</Text>
                    </View>
                        <Text style={style.text}>{productDetails?.source}</Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
        /* </View> */
    )
};

const style = StyleSheet.create({
    scroll: {
        Maxheight: "100%",
        // backgroundColor:"black",
        // marginLeft:"5%",/
        width: "100%",
        marginBottom: "25%",
        marginTop: "15%",
        alignSelf: "center",
        overflow: "scroll"
    },
    productlay: {
        display: "flex",
        alignContent: "center",
        // height:"1000%",
        // backgroundColor:"red",
        // maxheight: "90%",
        // maxHeight: "100%",
        width: "90%",
        alignSelf: "center",
        // marginLeft: "5%",
        overflow: "scroll",
        justifyContent: "space-between",
        gap: 25

    },
    product: {
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",
        backgroundColor: "#B4846C",
        height: "100%",
        // maxHeight: "50%",
        // margin: 10,
        marginBottom: "10%",
        borderRadius: 10,
    },
    imagee: {
        aspectRatio: 4 / 4,
        objectfit: "contain"

    },
    text: {
        marginLeft: "30%",
        marginRight: "10%",
        marginTop:"4%",
        textAlignVertical: "center",
        color: "white",
        fontSize: 22

    },
    textbg:{
        backgroundColor:"#7D5A50",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:"1%",
        marginRight:"20%",
        height:30,
        color:"white",
        // Maxheight:"30%",
        Naxwidth:"50%"
    }
})