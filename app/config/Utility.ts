import { getStatusBarHeight } from "react-native-status-bar-height"
import { Constants } from "./constants"

const getStatusBarStyle = (backgroundColor: string) => {
    return {
        width: Constants.SCREEN_WIDTH,
        height: getStatusBarHeight(),
        backgroundColor: backgroundColor,
    }
}

export default {
    getStatusBarStyle
}