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
                        Taro.navigateTo({ url: "/pages/ index/index" })
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
            <View className="index.container">
                <View className="index.searchBar">
                    <View className="index.body5" style="margin-left:20px">
                        春日出片秘籍
                    </View>
                    <View className="index.searchIcon"></View>
                </View>
            </View>

            <View className="index.container">
                <View className="index.cardWrap">
                    <View className="index.box" Style="justify-content: center">
                        <View className="index.picture1">
                            <View className="index.circleGroup"></View>
                        </View>
                    </View>
                    <View
                        className="index.box"
                        style="margin: 15px 15px 5px 15px; align-items: center; justify-content: space-between;"
                    >
                        <View>
                            <View
                                className="index.headline"
                                style="margin-right:10px"
                            >
                                想要留住 🎓 和你一起的回忆
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.FavourIcon"></View>
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.CommentIcon"></View>
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.StarIcon"></View>
                            </View>
                        </View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "0px 0px 0px 15px",
                            justifyContent: "flex-start",
                        }}
                    >
                        <View
                            className="index.avatar"
                            style={{ marginRight: "5px" }}
                        ></View>
                        <View>
                            <View className="index.username">困困233</View>
                            <View className="index.number">累计获赞555377</View>
                        </View>
                    </View>
                </View>
            </View>
            
            <View className="index.container">
                <View className="index.cardWrap">
                    <View className="index.box" Style="justify-content: center">
                        <View className="index.picture2">
                            <View className="index.circleGroup"></View>
                        </View>
                    </View>
                    <View
                        className="index.box"
                        style="margin: 15px 15px 5px 15px; align-items: center; justify-content: space-between;"
                    >
                        <View>
                            <View
                                className="index.headline"
                                style="margin-right:10px"
                            >
                                毛毛虫🐱会变成蝴蝶吗？
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.FavourIcon"></View>
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.CommentIcon"></View>
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.StarIcon"></View>
                            </View>
                        </View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "0px 0px 0px 15px",
                            justifyContent: "flex-start",
                        }}
                    >
                        <View
                            className="index.avatar2"
                            style={{ marginRight: "5px" }}
                        ></View>
                        <View>
                            <View className="index.username">万物可爱</View>
                            <View className="index.number">累计获赞698</View>
                        </View>
                    </View>
                </View>
            </View>

            <View className="index.container">
                <View className="index.cardWrap">
                    <View className="index.box" Style="justify-content: center">
                        <View className="index.picture3">
                            <View className="index.circleGroup"></View>
                        </View>
                    </View>
                    <View
                        className="index.box"
                        style="margin: 15px 15px 5px 15px; align-items: center; justify-content: space-between;"
                    >
                        <View>
                            <View
                                className="index.headline"
                                style="margin-right:10px"
                            >
                                教室里也可以拍出电影感
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.FavourIcon"></View>
                            </View>{" "}
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.CommentIcon"></View>
                            </View>{" "}
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.StarIcon"></View>
                            </View>
                        </View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "0px 0px 0px 15px",
                            justifyContent: "flex-start",
                        }}
                    >
                        <View
                            className="index.avatar3"
                            style={{ marginRight: "5px" }}
                        ></View>
                        <View>
                            <View className="index.username">小卡拉</View>
                            <View className="index.number">累计获赞4000</View>
                        </View>
                    </View>
                </View>
            </View>

            <View className="index.container">
                <View className="index.cardWrap">
                    <View className="index.box" Style="justify-content: center">
                        <View className="index.picture4">
                            <View className="index.circleGroup"></View>
                        </View>
                    </View>
                    <View
                        className="index.box"
                        style="margin: 15px 15px 5px 15px; align-items: center; justify-content: space-between;"
                    >
                        <View>
                            <View
                                className="index.headline"
                                style="margin-right:10px"
                            >
                                记录每个美好的瞬间
                            </View>
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.FavourIcon"></View>
                            </View>{" "}
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.CommentIcon"></View>
                            </View>{" "}
                        </View>
                        <View>
                            <View className="index.Button">
                                <View className="index.StarIcon"></View>
                            </View>
                        </View>
                    </View>
                    <View
                        className="index.container"
                        style={{
                            margin: "0px 0px 0px 15px",
                            justifyContent: "flex-start",
                        }}
                    >
                        <View
                            className="index.avatar4"
                            style={{ marginRight: "5px" }}
                        ></View>
                        <View>
                            <View className="index.username">花开富贵</View>
                            <View className="index.number">累计获赞520</View>
                        </View>
                    </View>
                </View>
            </View>

            
            
            <View className="index.container" style="margin-top:100px">
                {" "}
            </View>

            <View className="index.AddNewMomentButton"></View>

            <BottomNavigation />
        </View>
    );
}
