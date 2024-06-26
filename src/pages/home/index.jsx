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

export default function home() {
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
            <View className="index.container">
                <View className="index.banner" />
            </View>

            <View className="index.container">
                <View className="index.card">
                    <View
                        className="index.container"
                        style={{ margin: "10px 0px 0px 0px" }}
                    >
                        <View className="index.arrowLeft"></View>
                        <View className="index.picture"></View>
                        <View className="index.arrowRight"></View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "5px 15px 0px 0px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <View className="index.likeIcon" />
                        <View className="index.starIcon" />
                    </View>

                    <View
                        className="index.container"
                        style="
                            margin: 3px 15px 10px 15px;
                            justify-content: space-between;
                        "
                    >
                        <View className="box">
                            <View
                                className="index.avatar"
                                style={{ marginRight: "5px" }}
                            ></View>
                            <View>
                                <View className="index.username">困困233</View>
                                <View className="index.number">
                                    累计获赞555377
                                </View>
                            </View>
                        </View>
                        <View
                            className="index.button"
                            onClick={() =>
                                Taro.navigateTo({
                                    url: "/pages/page1/index",
                                })
                            }
                        >
                            <View className="index.body7">找Ta拍</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="index.container">
                <View className="index.card">
                    <View
                        className="index.container"
                        style={{ margin: "10px 0px 0px 0px" }}
                    >
                        <View className="index.arrowLeft"></View>
                        <View className="index.picture2"></View>
                        <View className="index.arrowRight"></View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "5px 15px 0px 0px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <View className="index.likeIcon" />
                        <View className="index.starIcon" />
                    </View>

                    <View
                        className="index.container"
                        style="
                            margin: 3px 15px 10px 15px;
                            justify-content: space-between;
                        "
                    >
                        <View className="box">
                            <View
                                className="index.avatar2"
                                style={{ marginRight: "5px" }}
                            ></View>
                            <View>
                                <View className="index.username">小美满</View>
                                <View className="index.number">
                                    累计获赞824
                                </View>
                            </View>
                        </View>
                        <View
                            className="index.button"
                            onClick={() =>
                                Taro.navigateTo({
                                    url: "/pages/photographer/index",
                                })
                            }
                        >
                            <View className="index.body7">找Ta拍</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="index.container">
                <View className="index.card">
                    <View
                        className="index.container"
                        style={{ margin: "10px 0px 0px 0px" }}
                    >
                        <View className="index.arrowLeft"></View>
                        <View className="index.picture3"></View>
                        <View className="index.arrowRight"></View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "5px 15px 0px 0px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <View className="index.likeIcon" />
                        <View className="index.starIcon" />
                    </View>

                    <View
                        className="index.container"
                        style="
                            margin: 3px 15px 10px 15px;
                            justify-content: space-between;
                        "
                    >
                        <View className="box">
                            <View
                                className="index.avatar3"
                                style={{ marginRight: "5px" }}
                            ></View>
                            <View>
                                <View className="index.username">
                                    小王不吃香菜
                                </View>
                                <View className="index.number">
                                    累计获赞3780
                                </View>
                            </View>
                        </View>
                        <View
                            className="index.button"
                            onClick={() =>
                                Taro.navigateTo({
                                    url: "/pages/photographer/index",
                                })
                            }
                        >
                            <View className="index.body7">找Ta拍</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="index.container">
                <View className="index.card">
                    <View
                        className="index.container"
                        style={{ margin: "10px 0px 0px 0px" }}
                    >
                        <View className="index.arrowLeft"></View>
                        <View className="index.picture4"></View>
                        <View className="index.arrowRight"></View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "5px 15px 0px 0px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <View className="index.likeIcon" />
                        <View className="index.starIcon" />
                    </View>

                    <View
                        className="index.container"
                        style="
                            margin: 3px 15px 10px 15px;
                            justify-content: space-between;
                        "
                    >
                        <View className="box">
                            <View
                                className="index.avatar4"
                                style={{ marginRight: "5px" }}
                            ></View>
                            <View>
                                <View className="index.username">
                                    小羊呼呼睡
                                </View>
                                <View className="index.number">
                                    累计获赞9980
                                </View>
                            </View>
                        </View>
                        <View
                            className="index.button"
                            onClick={() =>
                                Taro.navigateTo({
                                    url: "/pages/photographer/index",
                                })
                            }
                        >
                            <View className="index.body7">找Ta拍</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="index.container">
                <View className="index.card">
                    <View
                        className="index.container"
                        style={{ margin: "10px 0px 0px 0px" }}
                    >
                        <View className="index.arrowLeft"></View>
                        <View className="index.picture5"></View>
                        <View className="index.arrowRight"></View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "5px 15px 0px 0px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <View className="index.likeIcon" />
                        <View className="index.starIcon" />
                    </View>

                    <View
                        className="index.container"
                        style="
                            margin: 3px 15px 10px 15px;
                            justify-content: space-between;
                        "
                    >
                        <View className="box">
                            <View
                                className="index.avatar5"
                                style={{ marginRight: "5px" }}
                            ></View>
                            <View>
                                <View className="index.username">
                                    我爱吃火锅
                                </View>
                                <View className="index.number">
                                    累计获赞11279
                                </View>
                            </View>
                        </View>
                        <View
                            className="index.button"
                            onClick={() =>
                                Taro.navigateTo({
                                    url: "/pages/photographer/index",
                                })
                            }
                        >
                            <View className="index.body7">找Ta拍</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="index.container" style="margin-top:100px"></View>
            <BottomNavigation />
        </View>
    );
}
