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
                        Taro.navigateTo({ url: "/pages/page1/index" })
                    }
                >
                    <View className="index.backIcon"></View>
                </View>
            </View>
            <View className="index.backgroundPicture"></View>
            <View className="index.card1"></View>
            <View className="index.text1">三步完成你的预定</View>
            <View className="index.text2">STEP 1</View>
            <View className="index.card2"></View>
            <View className="index.text3">意向摄影师</View>
            <View className="index.card3"></View>
            <View className="index.text4">预计花费</View>
            <View className="index.text5">原价</View>
            <View className="index.text6">328</View>
            <View className="index.text7">258</View>
            <View className="index.text8">¥</View>
            <View className="index.chip1"></View>
            <View className="index.text9">30%OFF</View>
            {/* <View className="index.text14">%</View> */}
            {/* <View className="index.text15">OFF</View> */}

            <View className="index.chip2"></View>
            <View className="index.text10">您的昵称</View>
            <View className="index.textfield"></View>
            <View className="index.text11">摄影师怎么称呼你？</View>

            <View className="index.text10" style="margin-top:60px;">
                您的手机号
            </View>
            <View className="index.textfield" style="margin-top:60px;"></View>
            <View className="index.text11" style="margin-top:60px;">
                方便摄影师与您联系
            </View>
            <View className="index.text10" style="margin-top:120px;">
                您的约拍人数
            </View>
            <View className="index.button1"></View>
            <View className="index.button2"></View>
            <View className="index.button1" style="margin-left:40px;"></View>
            <View
                className="index.button1"
                style="margin-top:30px;margin-left:120px;"
            ></View>
            <View
                className="index.button1"
                style="margin-top:30px;margin-left:80px;"
            ></View>

            <View className="index.text10" style="margin-top:150px;">
                您的约拍地点
            </View>

            <View className="index.text15" style="margin-left:80px;">
                三人及以上
            </View>
            <View className="index.text15">单人</View>
            <View className="index.text15" style="margin-left:40px">
                双人
            </View>
            <View
                className="index.text15"
                style="margin-top:30px;margin-left:80px;"
            >
                校内
            </View>
            <View
                className="index.text15"
                style="margin-top:30px;margin-left:120px;"
            >
                校外
            </View>
            <View className="index.text12">
                *如果所选摄影师不支持校外约拍则此项不可选
            </View>
            <View className="index.text12" style="margin-top:13px;">
                *具体地点可在订单基础信息确认后与摄影师1v1 沟通
            </View>
            <View
                className="index.button"
                onClick={() => Taro.navigateTo({ url: "/pages/page3/index" })}
            ></View>
            <View className="index.text13"onClick={() => Taro.navigateTo({ url: "/pages/page3/index" })}>下一步，选择日期</View>
            <View className="index.circleGroup"></View>
            {/* <View className="index.card1"></View> */}
        </View>
    );
}
