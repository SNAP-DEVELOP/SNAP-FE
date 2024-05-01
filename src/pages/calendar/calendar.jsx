import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./calendar.css";
// import "../app.css";

export default function Calendar() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View>
            <View className="calendar.page" />
            <View className="calendar.backgroundLogo" />
            <View className="calendar.box">
                <View className="calendar.head" />
            </View>
            <View className="SettingButton">
              <View className="SettingIcon"/>
            </View>
            <View className="calendar.BottomNavigation">
                <View className="calendar.BottomNavigation2">
                    <View
                        className="calendar.HomeButton"
                        style={{ margin: "0px 10px 0px 10px" }}
                    >
                        <View className="calendar.HomeIcon"></View>
                    </View>
                    <View
                        className="calendar.MomentsButton"
                        style={{ margin: "0px 10px 0px 10px" }}
                    >
                        <View className="calendar.MomentsIcon"></View>
                    </View>
                    <View
                        className="calendar.ChatButton"
                        style={{ margin: "0px 10px 0px 10px" }}
                    >
                        <View className="calendar.ChatIcon"></View>
                    </View>
                    <View
                        className="calendar.CalendarButton"
                        style={{ margin: "0px 10px 0px 10px" }}
                    >
                        <View className="calendar.CalendarIcon"></View>
                    </View>
                </View>
            </View>
        </View>
    );
}
