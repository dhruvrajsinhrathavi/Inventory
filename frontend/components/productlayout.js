import * as React from "react";
import { useState,useEffect } from "react";
import { Image } from "expo-image";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { StyleSheet, View, Pressable, Text, Alert,} from "react-native";
import { useNavigation ,navigate} from "@react-navigation/native";
import { FontSize } from "../GlobalStyles";
import axios from "axios";
import { AppStateContext } from "../App";

export default function Productlayout() {

    const [products, setProducts] = useState([]);

    const {setProductName} = React.useContext(AppStateContext)

    const getProducts = async () => {
        const response = await axios.get("http://192.168.149.136:5000/api/product/getAllProducts");

        // console.log(response.data);
        setProducts(response.data);
    }

    useEffect(() => {
      getProducts();
    }, [])
    

    
    const navigation = useNavigation();


    return (
        // <View>
        <ScrollView style={style.scroll} >
            <View style={style.productlay}>

                {products.map(key=>{
                    return (
                        <Pressable onPress={() =>  {
                            setProductName(key.name)
                            navigation.navigate("AndroidSmall16")
                        }}>
                            <View style={style.product}>
                                <Image source={"https://cdn.shopify.com/s/files/1/0044/1208/0217/products/CHR2226SRB_BST_400x.jpg?v=1661147635"}
                                    style={style.imagee}
                                />
                                <Text style={style.text}>{key.name}</Text>
                            </View>
                    </Pressable>
                    )
                })}
               

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
        backgroundColor: "#B4846C",
        height: "100%",
        // maxHeight: "50%",
        // margin: 10,
        marginBottom: "20%",
        borderRadius: 10,
    },
    imagee: {
        aspectRatio: 4 / 4,
        objectfit: "contain"

    },
    text: {
        marginLeft: "20%",
        textAlignVertical: "center",
        color: "white",
        fontSize: 22

    }
})