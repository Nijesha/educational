import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native";
import normalize from "../config/normalize";
import { Constants } from '../config/constants';
import AppColors from "../config/colors";

type Props = {
    title?: string;
    titleStyle?: any;
    onLeftButtonPress?: any;
    onRightButtonPress?: () => void;
    rightImage?: number;
    rightImageStyle?: any;
    isShowLeftButton?: boolean;
    leftImage?: number;
    leftButtonStyle?: any;
    leftImageStyle?: any;
    rightButtonStyle?: any;
    mainContainer?: any;
    statusBarContainerStyle?: any;
}
const CustomHeader = (props: Props) => {

    return (
        <View>
            <View style={[styles.statusBarContainer, props.statusBarContainerStyle]} />
            <SafeAreaView style={styles.headerView}>
            <View style={[styles.container, props.mainContainer]}>
                {props.isShowLeftButton ?
                    <TouchableOpacity
                        style={[styles.backButton, styles.flexLeftRight, props.leftButtonStyle]}
                        onPress={() => props.onLeftButtonPress()}>
                            <Image
                                style={[styles.backButtonImage, props.leftImageStyle]}
                                resizeMode='contain'
                                source={props.leftImage} />
                    </TouchableOpacity>
                    :
                    <View style={styles.flexLeftRight} />
                }

                <View style={[styles.headerCenterTextContainer, styles.flexCenter]}>
                        <Text numberOfLines={1} style={[styles.headerCenterTextStyle, props.titleStyle]}>{props.title}</Text>
                </View>

                <View style={styles.flexLeftRight}>
                 
                    {props.rightImage &&
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[styles.rightButton, props.rightButtonStyle]}
                            onPress={() => {
                                if (props.onRightButtonPress) {
                                    props.onRightButtonPress()
                                }
                            }}>
                            <Image
                                style={[styles.backButtonImage, props.rightImageStyle]}
                                resizeMode={'contain'}
                                source={props.rightImage} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        zIndex:1, 
    },
    rightButton: {
        height: normalize(50),
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    backButtonImage: {
        height: normalize(25),
        width: normalize(25),
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: normalize(50),
        width: normalize(48),
        zIndex: 100,
    },
    headerCenterTextContainer: {
        height: normalize(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenterTextStyle: {
        marginLeft: normalize(10),
        color: AppColors.COLOR_BLACK,
        fontSize: normalize(17),
    },
    container: {
        flexDirection: 'row',
        height: normalize(50),
        width: Constants.SCREEN_WIDTH,
        justifyContent: 'space-between',
        borderBottomRightRadius: normalize(12),
        borderBottomLeftRadius: normalize(12),
        paddingHorizontal: 16
    },
    statusBarContainer: {
        width: Constants.SCREEN_WIDTH,
        marginTop: normalize(10)
    },
    flexLeftRight: {
        flex: 1
    },
    flexCenter: {
        flex: 10
    },
});

export default CustomHeader;