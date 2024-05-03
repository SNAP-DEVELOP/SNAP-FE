import { View, Text } from "@tarojs/components";
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

export default function Chatbox() {
    useLoad(() => {
        console.log("Page loaded.");
    });
    const message = !null;
    return (
        <View>
            <View className="index.page" />
            <View className="index.backgroundLogo" />
            <View className="index.box"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                <View className="index.head" onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}/>
            </View>
            {!message ? (
                <View>
                    <View className="index.card1"></View>
                    <View className="index.error"></View>
                    <View className="index.text1">
                        您还没有消息 快去下单，和摄影师沟通 具体的拍照细则吧～
                    </View>
                    <View className="index.text2">哎呀！</View>
                </View>
            ) : (
                <View>
                    <View className="index.text4">您的订单专属沟通群</View>
                    <View className="index.personGroupIcon"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}></View>


                    <View className="index.card2" onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}></View>
                        <View className="index.chip"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                        </View>
                            <View className="index.text5"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>进行中</View>
                        <View className="index.text6"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                            羊驼 & 若晗 5.12校内..
                        </View>
                        <View className="index.text9"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                            若晗：其实我们去颐和园的话...
                        </View>
                        <View className="index.text10"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>23:15</View>
                        <View className="index.text7"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                            Snap小助手：小助手已加入群聊...
                        </View>
                        <View className="index.text8"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>23:22</View>
                        <View className="index.avatorGroup"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}></View>

                        <View className="index.card3" onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}></View>
                        <View className="index.chip2"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                        </View>
                            <View className="index.text11"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>进行中</View>
                        <View className="index.text12"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                            寻屿 & 小羊 5.20校内..
                        </View>
                        <View className="index.text15"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                            寻屿：我有时间，带上我舍友...
                        </View>
                        <View className="index.text16"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>16:22</View>
                        <View className="index.text13"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>
                            小羊：晚上八点可以嘛，我们下课...
                        </View>
                        <View className="index.text14"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}>15:45</View>
                        <View className="index.avatorGroup2"onClick={() => Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })}></View>

                </View>
            )}
            <BottomNavigation />
        </View>
    );
}
