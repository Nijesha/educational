import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import config from "../config";
import AppColors from "../config/colors";
import images from "../config/images";
import { t } from "i18next";
import CustomText from "../components/CustomText";
import normalize from "../config/normalize";
import AppStyles from "../config/app_styles";

type RootStackParamList = {
    DetailsScreen: { selectedItem: any };
};

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

const DetailsScreen = ({ route, navigation }: Props) => {

    const item = route?.params?.selectedItem;

    return (
        <View style={AppStyles.mainContainer}>
            <View style={[config.Utility.getStatusBarStyle(AppColors.COLOR_TRASPARENT)]} />
            <SafeAreaView style={AppStyles.safeAreaView}>
                <CustomHeader
                    title={t('details')}
                    onLeftButtonPress={() => navigation.pop()}
                    leftImage={images.icons.back}
                    isShowLeftButton
                />
                <ScrollView contentContainerStyle={styles.container}>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode="cover"/>
                    <CustomText title={item.title} Style={styles.title}/>
                    <CustomText title={`${item.category} • ${item.duration} • ${item.level}`} Style={styles.meta}/>
                    <CustomText title={item.description} Style={styles.description}/>
                    <Text style={styles.instructor}>
                        {t('Instructor')}: <Text style={styles.instructorName}>{item.instructor}</Text>
                    </Text>

                    <View style={styles.tagContainer}>
                    <CustomText title={`${t('Tags')}:`} Style={styles.sectionLabel}/>
                        <View style={styles.tagsWrapper}>
                            {item.tags?.map((tag: string, index: number) => (
                                <View key={index} style={styles.tagChip}>
                                    <CustomText title={`#${tag}`} Style={styles.tagText}/>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: normalize(200),
        borderRadius: normalize(10),
        marginBottom: normalize(10),
    },
    title: {
        fontSize: normalize(22),
        fontWeight: 'bold',
        marginVertical: normalize(10),
        color: AppColors.COLOR_BLACK,
    },
    meta: {
        fontSize: normalize(14),
        color: AppColors.COLOR_BLACK,
        marginBottom: normalize(10),
    },
    description: {
        fontSize: normalize(16),
        marginVertical: normalize(10),
        color: AppColors.COLOR_BLACK,
    },
    instructor: {
        fontSize: normalize(14),
        fontStyle: 'italic',
        marginBottom: normalize(10),
        color: AppColors.COLOR_BLACK,
    },
    instructorName: {
        color: AppColors.COLOR_BLACK,
        fontWeight: '600',
    },
    tagContainer: {
        marginTop: normalize(10),
    },
    sectionLabel: {
        fontSize: normalize(16),
        fontWeight: '600',
        marginBottom: 5,
    },
    tagsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tagChip: {
       backgroundColor: AppColors.COLOR_GRAY,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        fontSize: normalize(12),
        color: AppColors.COLOR_BLACK,
    },
});

export default DetailsScreen;
