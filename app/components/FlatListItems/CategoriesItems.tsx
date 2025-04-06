import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppColors from "../../config/colors";
import normalize from "../../config/normalize";
import CustomText from "../CustomText";
import images from "../../config/images";

export type CategoriesItemsProps = {
    id?: string;
    thumbnail?: any;
    title?: any;
    category?: any;
    duration?: any;
    onItemClick?: any;
    toggleBookmark?: any;
    bookmarked?: boolean;
    isSelected?: boolean;
};

const CategoriesItems = (props: CategoriesItemsProps) => {
    const [isBookmarked, setIsBookmarked] = useState(props.bookmarked);

    useEffect(() => {
        setIsBookmarked(props.bookmarked);
    }, [props.bookmarked]);

    const handleBookmarkToggle = () => {
        setIsBookmarked(!isBookmarked);
        props.toggleBookmark?.(props.id);
    };

    return (
        <TouchableOpacity
            style={[
                styles.cardView,
                props.isSelected && styles.selectedCardView,
            ]}
            onPress={props.onItemClick}
        >
            <View style={styles.relativeContainer}>
                {/* Bookmark Icon - Top Right */}
                <TouchableOpacity
                    onPress={handleBookmarkToggle}
                    style={styles.bookmarkIcon}
                >
                    <Image
                        source={
                            isBookmarked
                                ? images.icons.bookmarkFill
                                : images.icons.bookmark
                        }
                        style={{ width: normalize(16), height: normalize(16) }}
                    />
                </TouchableOpacity>

                {/* Thumbnail */}
                <View style={styles.thumbnailView}>
                    <Image
                        source={{ uri: props.thumbnail }}
                        style={styles.thumbnailImg}
                        resizeMode="cover"
                    />
                </View>

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text
                        style={styles.titleTxt}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {props.title}
                    </Text>
                    <CustomText title={props.category} Style={styles.categoryTxt} />
                    <CustomText title={props.duration} Style={styles.categoryTxt} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        backgroundColor: AppColors.COLOR_WHITE,
        height: normalize(120),
        borderWidth: 1,
        borderRadius: normalize(8),
        margin: normalize(5),
    },
    selectedCardView: {
        borderColor: AppColors.COLOR_PRIMARY,
        borderWidth: 2,
    },
    thumbnailView: {
        width: normalize(130),
        height: normalize(100),
        margin: normalize(10),
    },
    thumbnailImg: {
        width: '100%',
        height: '100%',
        borderRadius: normalize(8),
    },
    titleTxt: {
        fontWeight: 'bold',
        fontSize: normalize(16),
        color: AppColors.COLOR_BLACK,
    },
    categoryTxt: {
        fontSize: normalize(12),
        color: AppColors.COLOR_BLACK,
        marginTop: normalize(4),
    },
    relativeContainer: {
        flexDirection: 'row',
        position: 'relative',
        flex: 1,
    },
    textContent: {
        flex: 1,
        marginTop: normalize(10),
        paddingRight: normalize(8), // allows text to truncate properly
        justifyContent: 'center',
    },
    bookmarkIcon: {
        position: 'absolute',
        top: normalize(8),
        right: normalize(8),
        zIndex: 10,
        padding: normalize(4),
    },
});

export default CategoriesItems;
