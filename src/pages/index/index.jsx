import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

import Taro from "@tarojs/taro";

export default function Index() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View>
            {/* <View className="index.card1">
                <View className="index.background">
                    <View className="index.photoNumber1"></View>
                    <View className="index.photoNumber2"></View>
                    <View className="index.photoNumber3"></View>
                    <View className="index.photoNumber4"></View>
                    <View className="index.photoNumber5"></View>
                    <View className="index.photoNumber6"></View>
                    <View className="index.photoNumber7"></View>
                    <View className="index.photoNumber8"></View>
                    <View className="index.photoNumber9"></View>
                    <View className="index.photoNumber10"></View>
                </View>
            </View> */}
            <View className="index.card2">
                <View style="position: relative; z-index: 2">
                    <View className="index.container">
                        <View className="index.subtitle1">注册/登录</View>
                    </View>
                    <View className="index.container">
                        <View className="index.textbox">
                            <view className="index.body6">账号</view>
                        </View>
                    </View>
                    <View className="index.container">
                        <View className="index.textbox">
                            <view className="index.body6">密码</view>
                            <View className="index.switchButton">
                                <View className="index.switchIcon"></View>
                            </View>
                        </View>
                    </View>
                    <View className="index.container">
                        <View
                            className="index.selectButton"
                            style="margin-right:20px"
                            onClick={() =>
                                Taro.navigateTo({ url: "/pages/home/index" })
                            }
                        >
                            <View className="index.body2">我是约拍者</View>
                        </View>

                        <View className="index.selectButton">
                            <View className="index.body2">我是摄影师</View>
                        </View>
                    </View>
                    <View className="index.container">
                        <View
                            className="index.box"
                            onClick={() =>
                                Taro.navigateTo({ url: "/pages/home/index" })
                            }
                        >
                            <View className="index.body2">游客登录</View>
                        </View>
                    </View>
                </View>
                <View className="index.backgroundLogo" />
            </View>
        </View>
    );
}
