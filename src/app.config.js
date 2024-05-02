export default defineAppConfig({
    pages: [
        "pages/index/index",
        "pages/home/index",
        "pages/calendar/index",
        "pages/moments/index",
        "pages/chatbox/index",
        "pages/chatbox/chatroom/index",
    ],
    window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "black",
        navigationStyle: "custom",
    },
});

