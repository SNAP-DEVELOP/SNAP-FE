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
                        Taro.navigateTo({ url: "/pages/home/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
            </View>
            <View className="index.photographerProfile"></View>
            <View
                className="index.card2"
                style="display: flex;
                        align-items: center;justify-content: space-between;"
            >
                <View
                    className="index.reserveButton"
                    style="display: flex;
                        align-items: center;justify-content: center;margin-left:20px "
                        onClick={() =>
                          Taro.navigateTo({ url: "/pages/page2/index" })
                      }
                >
                    <View className="index.reserveIcon">立即预定</View>
                </View>
                <View
                    className="index.collectButton"
                    style="display: flex;
                        align-items: center;justify-content: center;margin-right:20px "
                >
                    <View className="index.collectIcon">收藏</View>
                </View>
            </View>
        </View>
    );
}
