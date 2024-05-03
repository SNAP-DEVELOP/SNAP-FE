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
            <View className="index.text1">三步完成你的预定</View>
            <View className="index.text2">STEP 3</View>

            <View className="index.modal">
                <View
                    className="index.container"
                    style="display: flex; justify-content: space-between;margin-bottom:5px"
                >
                    <View className="index.warningIcon"></View>
                    <View className="index.title">Snap协议</View>
                    <View className="index.closeIcon"></View>
                </View>
                <View className="index.container" style="margin-top:0px;margin-bottom:5px">
                    <View className="index.modalText">
                        MG 和国内各行业头部企业达成深度共创，MG
                        会为共创企业提供专项迁移支持和专属定制化服务，在实现以用户为导向的产品迭代的过程中，为设计师打造性能更高、产品体验更好的设计软件。
                    </View>
                </View>
                <View
                    className="index.container"
                    style="display: flex; justify-content: space-between;margin-top:0px;margin-bottom:5px"
                >
                    <View className="index.cancelButton"></View>
                    <View className="index.confirmButton"></View>
                </View>
            </View>
            <View
                className="index.button"
                onClick={() => Taro.navigateTo({ url: "/pages/page6/index" })}
            ></View>
            <View className="index.text13">下一步，选择日期</View>
            <View className="index.circleGroup"></View>
            {/* <View className="index.card1"></View> */}
        </View>
    );
}
