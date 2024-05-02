import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

import Taro from "@tarojs/taro";

export default function Chatroom() {
    useLoad(() => {
        console.log("Page loaded.");
    });
    return (
        <View>
            <View className="index.page" />
            <View className="index.backgroundLogo" />
            <View className="index.box"></View>

            <View className="index.dialog"></View>
            <View className="index.head2">
                <View
                    className="index.backButton"
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/chatbox/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
                <View className="index.text3">SNAP 消息列表</View>
            </View>
            <View className="index.bottomBar"></View>
            <View className="index.textSpace"></View>
            <View className="index.micIcon"></View>
            <View className="index.emojyIcon"></View>
        </View>
    );
}
