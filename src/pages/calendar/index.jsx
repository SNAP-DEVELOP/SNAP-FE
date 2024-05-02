import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

import Taro from "@tarojs/taro";
// import BottomNavigation from "../../components/BottomNavigation";
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

export default function Calendar() {
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
            <View
                className="index.container"
                style="display: flex; justify-content: space-between;"
            >
                <View>
                    <View
                        className=" index.subtitle1"
                        style="margin-bottom:10px"
                    >
                        咔嚓小助手
                    </View>
                    <View className=" index.body1">
                        下午好！今日微风 宜出游 📷
                    </View>
                </View>
                <View>
                    <View className=" index.avator"></View>
                </View>
            </View>
            <View className="index.container">
                <View className=" index.userProfileCard1">
                    <View className=" index.userProfileCard2">
                        <View
                            className=" index.subtitle2"
                            style="margin-left:25px"
                        >
                            足迹
                        </View>
                    </View>
                    <View
                        className="index.container"
                        style="justify-content: space-between;margin-top:15px"
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <View className="index.body2">37</View>
                            <View className="index.body3">笔记</View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <View className="index.body2">266</View>
                            <View className="index.body3">收到的赞</View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <View className="index.body2">25</View>
                            <View className="index.body3">关注</View>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <View className="index.body2">90</View>
                            <View className="index.body3">粉丝</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="index.calendarCard"></View>
            <View
                className="index.container"
                style={{
                    justifyContent: "flex-start",
                    marginLeft: "30px",
                    marginBottom: "0px",
                }}
            >
                <View className=" index.subtitle1">回忆相册</View>
            </View>
            <View
                className="index.container"
                style="justify-content: space-between"
            >
                <View className=" index.albumCard1"></View>
                <View className=" index.albumCard2"></View>
            </View>
            <View className="index.container" style="margin-top:100px"></View>
            <BottomNavigation />
        </View>
    );
}
