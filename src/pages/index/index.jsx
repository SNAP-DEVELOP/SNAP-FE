import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { AtButton } from "taro-ui";

export default function Index() {
    useLoad(() => {
        console.log("Page loaded.");
    });

    return (
        <View className="index">
            <Text>Hello world! !!</Text>
            <AtButton type="primary" customStyle={{ border: "1px solid #000" }}>
                按钮文案
            </AtButton>
        </View>
    );
}

