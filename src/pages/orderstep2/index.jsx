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
            <View className="index.slot"></View>
            <View className="index.month"></View>

            <View className="index.card5">
            <View className="index.monthSelect"></View>
            <View className="index.line"></View>
            <View className="index.monthText"></View>
            <View className="index.select1"></View>
            </View>

            <View className="index.date"></View>
            <View className="index.dateExplain"></View>
            <View className="index.card6">
                <View className="index.date2"></View>
                <View className="index.background"></View>
                <View className="index.snapLogo"></View>
            </View>

            <View className="index.card7">
              <View className="index.time"></View>
              <View className="index.card8">
                <View className="index.timeSelect"></View>
                <View className="index.line2"></View>
                <View className="index.timeText"></View>
                <View className="index.select2"></View>
              </View>
            </View>

            <View className="index.weather"></View>
            <View className="index.weatherSymbol"></View>
            <View className="index.temperature"></View>

            <View
                    className="index.reserveButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/orderstep2/index" })
                    }
                >
                    <View className="index.reserveIcon"></View>
                </View>

                <View
                    className="index.defineButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/orderstep2/index" })
                    }
                >
                    <View className="index.defineIcon"></View>
                </View>

                <View
                    className="index.backchangeButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/orderstep2/index" })
                    }
                >
                    <View className="index.backchangeIcon"></View>
                </View>

            </View>
        </View>
    );
}
