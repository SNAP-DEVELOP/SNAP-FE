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
            <View className="index.page" />
            <View className="index.backgroundLogo" />

            <View className="index.head2">
                <View
                    className="index.backButton"
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/home/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
            </View>
            <View className="index.container" style="margin-top:100px"></View>
            <View className="index.container">
                <View className="index.payMessage">定金支付成功</View>
            </View>
            <View className="index.container">
                <View className="index.payText">芜湖！记录回忆倒计时</View>
            </View>
            <View className="index.container">
                <View className="index.picture"></View>
            </View>
            <View
                className="index.container"
                onClick={() =>
                    Taro.navigateTo({ url: "/pages/chatbox/chatroom/index" })
                }
            >
                <View
                    className="index.button"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({
                            url: "/pages/chatbox/chatroom/index",
                        })
                    }
                >
                    <View
                        className="index.linkgroupIcon"
                        onClick={() =>
                            Taro.navigateTo({
                                url: "/pages/chatbox/chatroom/index",
                            })
                        }
                    >
                        去和摄影师群内沟通
                    </View>
                </View>
            </View>
            <View className="index.container">
                <View
                    className="index.button"
                    style={{ margin: "0px 10px 0px 10px" }}
                >
                    <View className="index.reserveIcon">预定妆造/道具</View>
                </View>
            </View>
            <View
                className="index.container"
                onClick={() => Taro.navigateTo({ url: "/pages/home/index" })}
            >
                <View
                    className="index.button"
                    style={{ margin: "0px 10px 0px 10px" }}
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/home/index" })
                    }
                >
                    <View
                        className="index.backchangeIcon"
                        onClick={() =>
                            Taro.navigateTo({ url: "/pages/home/index" })
                        }
                    >
                        返回主页
                    </View>
                </View>
            </View>

            <View className="index.snapLogo"></View>
        </View>
    );
}
