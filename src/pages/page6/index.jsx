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
                        Taro.navigateTo({ url: "/pages/page4/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
            </View>
            <View className="index.backgroundPicture"></View>
            <View className="index.card1"></View>
            <View className="index.text1">只差一步！确认您的订单信息</View>
            <View className="index.text2">STEP 3</View>
            <View className="index.card4" />
            <View className="index.orderInformation">订单信息</View>
            <View className="index.name">您的昵称</View>
            <View className="index.nameCard"></View>
            <View className="index.phone">您的电话</View>
            <View className="index.phoneCard"></View>
            <View className="index.number">约拍人数</View>
            <View className="index.numberCard"></View>
            <View className="index.photographer">选定摄影师</View>
            <View className="index.photographerCard"></View>
            <View className="index.time">约拍时间</View>
            <View className="index.timeCard1"></View>
            <View className="index.timeText1">月份</View>
            <View className="index.timeCard2"></View>
            <View className="index.timeText2">*日期（可为空）</View>
            <View className="index.timeCard3"></View>
            <View className="index.timeText3">*时段（可为空）</View>
            <View className="index.orderFlow"></View>

            <View
                className="index.defineButton"
                style={{ margin: "0px 10px 0px 10px" }}
                onClick={() => Taro.navigateTo({ url: "/pages/page5/index" })}
            ></View>
            <View className="index.defineIcon">确认！一起咔嚓！</View>

            <View
                className="index.backchangeButton"
                style={{ margin: "0px 10px 0px 10px" }}
                onClick={() => Taro.navigateTo({ url: "/pages/page3/index" })}
            ></View>

            <View className="index.backchangeIcon">返回修改</View>

            <View className="index.pay"onClick={() =>
                        Taro.navigateTo({ url: "/pages/payment/index" })
                    }></View>
            <View
                className="index.button"
                onClick={() => Taro.navigateTo({ url: "/pages/page6/index" })}
            ></View>
            <View className="index.circleGroup"></View>
        </View>
    );
}
