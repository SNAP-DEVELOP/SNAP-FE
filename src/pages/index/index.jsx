import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { AtButton } from "taro-ui";

export default function Index() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View className="index.page">
            <View className="index.head">SNAP!</View>
            <View className="index.backgroundLogo"></View>
            <View className="index.banner"></View>
            <View className="index.card">
                <View className="index.ArrowLeft"></View>
                <View className="index.picture"></View>
                <View className="index.ArrowRight"></View>
                <View className="index.user"></View>
                <View className="index.username"></View> 
                <View className="index.number"></View>
                <View className="index.heart"></View>
                <View className="index.star"></View> 
            </View>  
            <View className="index.card2">
                <View className="index.ArrowLeft2"></View>
                <View className="index.picture2"></View>
                <View className="index.ArrowRight2"></View>    
            </View>  
        </View>
    );
}

