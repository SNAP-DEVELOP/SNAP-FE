import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

import Taro from "@tarojs/taro";

export default function Photographer() {
    useLoad(() => {
        console.log("Page loaded.");
    });
    return (
        <View>
            <View className="index.page" />
            <View className="index.backgroundLogo" />
            <View className="index.head2" />
            <View>
                <View
                    className="index.backButton"
                    onClick={() =>
                        Taro.navigateTo({ url: "/pages/page2/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
            </View>
            <View className="index.backgroundPicture"></View>
            <View className="index.card1"></View>
            <View className="index.text1">三步完成你的预定---表单</View>
            <View className="index.text2">STEP 2</View>
            <View className="index.card4" />
            <View className="index.slot">意向约拍档期</View>
            <View className="index.month">拍摄月份</View>

            <View className="index.card5"></View>
            <View className="index.monthSelect">5 月</View>
            <View className="index.line"></View>
            <View className="index.monthText">草长莺飞毕业季</View>
            <View className="index.select1"></View>

            <View className="index.date">拍摄日期</View>
            <View className="index.dateExplain">
                白色为全天可选日期（摄影师档期全天有空）
                灰色为部分可选日期（摄影师上/下午部分有空）
            </View>
            <View className="index.card6"></View>
            <View className="index.background"></View>
            <View className="index.snapLogo"></View>
            <View className="index.date2"style="z-index:1px;">选择日期</View>

            <View className="index.card7"></View>
            <View className="index.time">选择意向时段*非必选</View>
            <View className="index.card8"></View>
            <View className="index.timeSelect">6-8</View>
            <View className="index.line2"></View>
            <View className="index.timeText">晨光熹微</View>
            <View className="index.select2"></View>

            <View className="index.weather">当日天气预计：</View>
            <View className="index.weatherSymbol"></View>
            <View className="index.temperature">25°</View>

            <View
                className="index.reserveButton"
                style={{ margin: "0px 10px 0px 10px" }}
            >
            </View>

                <View className="index.reserveIcon">我还没想好，先预定</View>
            <View
                className="index.defineButton"
                style={{ margin: "0px 10px 0px 10px" }}
                onClick={() => Taro.navigateTo({ url: "/pages/page4/index" })}
            >
              
            </View>
            <View
                className="index.defineIcon"
                onClick={() => Taro.navigateTo({ url: "/pages/page4/index" })}
            >
                下一步，确认订单
            </View>

            <View
                className="index.backchangeButton"
                style={{ margin: "0px 10px 0px 10px" }}
                onClick={() => Taro.navigateTo({ url: "/pages/page2/index" })}
            ></View>

            <View
                className="index.backchangeIcon"
                onClick={() => Taro.navigateTo({ url: "/pages/page2/index" })}
            >
                返回修改
            </View>

            <View className="index.circleGroup"></View>
        </View>
    );
}
