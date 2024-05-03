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
            <View className="index.payMessage" ></View>
            <View className="index.payText" ></View>
            <View className="index.picture" ></View>
        
            <View
                    className="index.linkgroupButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/payment/index" })
                    }
                >
                    <View className="index.linkgroupIcon"></View>
                </View>

                <View
                    className="index.reserveButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/payment/index" })
                    }
                >
                    <View className="index.reserveIcon"></View>
                </View>

                <View
                    className="index.backchangeButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/payment/index" })
                    }
                >
                    <View className="index.backchangeIcon"></View>
                </View>
                <View className="index.snapLogo" ></View>
            </View>
    );
}
