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
                <View className="index.right"></View>

                <View className="index.picture"></View>
            </View>
        </View>
    );
}

