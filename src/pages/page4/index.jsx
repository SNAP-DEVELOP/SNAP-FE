import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

import Taro from "@tarojs/taro";

export default function Photographer() {
    useLoad(() => {
        console.log("Page loaded.");
    });
    return (
        <View>
            <View className="index.page" />
            <View className="index.backgroundLogo" />
            <View className="index.head2" />
            <View>
                <View
                    className="index.backButton"
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/page3/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
            </View>
            <View className="index.backgroundPicture"></View>
            <View className="index.card1"></View>
            <View className="index.text1">三步完成你的预定</View>
            <View className="index.text2">STEP 3</View>
           
            <View
                className="index.button"
                onClick={() => Taro.navigateTo({ url: "/pages/page5/index" })}
            ></View>
            <View className="index.text13">下一步，选择日期</View>
            <View className="index.circleGroup"></View>
            {/* <View className="index.card1"></View> */}
        </View>
    );
}
