import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import Taro from "@tarojs/taro";

export default function home() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View>
            <View className="index.card4" >
            <View className="index.orderInformation"></View>
            <View className="index.name"></View>
            <View className="index.nameCard"></View>
            <View className="index.phone"></View>
            <View className="index.phoneCard"></View>
            <View className="index.number"></View>
            <View className="index.numberCard"></View>
            <View className="index.photographer"></View>
            <View className="index.time"></View>
            <View className="index.timeCard1">
                <View className="index.timeText1"></View>
            </View>
            <View className="index.timeCard2">
                <View className="index.timeText2"></View>
            </View>
            <View className="index.timeCard3">
                <View className="index.timeText3"></View>
            </View>
            
            <View className="index.card5"></View>
            <View className="index.step1"></View>
            <View className="index.line"></View>
            <View className="index.step2"></View>
            <View className="index.step3"></View>
            <View className="index.step4"></View>

            <View className="index.step1Text"></View>
            <View className="index.step2Text"></View>
            <View className="index.step3Text"></View>
            <View className="index.step4Text"></View>

            <View
                    className="index.defineButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/orderstep3/index" })
                    }
                >
                    <View className="index.defineIcon"></View>
                </View>

                <View
                    className="index.backchangeButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/orderstep3/index" })
                    }
                >
                    <View className="index.backchangeIcon"></View>
                </View>

            </View>
        </View>
    );
}
