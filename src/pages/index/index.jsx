import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

import Taro from "@tarojs/taro";

function BottomNavigation() {
    return (
        <View className="index.BottomNavigation">
            <View className="index.BottomNavigation2">
                <View
                    className="index.HomeButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/home/index" })
                    }
                >
                    <View className="index.HomeIcon"></View>
                </View>
                <View
                    className="index.MomentsButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/moments/index" })
                    }
                >
                    <View className="index.MomentsIcon"></View>
                </View>
                <View
                    className="index.ChatButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/chatbox/index" })
                    }
                >
                    <View className="index.ChatIcon"></View>
                </View>
                <View
                    className="index.CalendarButton"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/calendar/index" })
                    }
                >
                    <View className="index.CalendarIcon"></View>
                </View>
            </View>
        </View>
    );
}

export default function Moments() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View>
            <View className="index.page" />
            <View className="index.backgroundLogo" />
            <View className="index.box">
                <View className="index.head" />
            </View>
            <BottomNavigation />
        </View>
    );
}