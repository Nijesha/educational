import React from "react";
import { StyleSheet, Text } from "react-native";
import normalize from "../config/normalize";

type Props = {
    title: string;
    Style?: any;
    numberOfLines?: any;
    ellipsizeMode?: any
}
const CustomText = (props: Props) => {
    return (
        <Text style={[styles.text, props.Style]} numberOfLines={props.numberOfLines}
            ellipsizeMode={props.ellipsizeMode}>{props.title}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: normalize(14),
    }
});

export default CustomText;