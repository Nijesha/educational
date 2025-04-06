import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CategoriesItems from "../components/FlatListItems/CategoriesItems";
import AppColors from "../config/colors";
import config from "../config";
import normalize from "../config/normalize";
import CustomHeader from "../components/CustomHeader";
import { Constants, educational } from "../config/constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import images from "../config/images";
import { t } from "i18next";
import AppStyles from "../config/app_styles";
import CustomText from "../components/CustomText";

type RootStackParamList = {
    HomeScreen: {};
    DetailsScreen: { selectedItem: any };
    BookmarksScreen: {};
};

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {

    const [educationalData, setEducationalData] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [bookmarks, setBookmarks] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const loadBookmarks = async () => {
                try {
                    const stored = await AsyncStorage.getItem(Constants.AsyncStorageKeys.bookmark);
                    if (stored) setBookmarks(JSON.parse(stored));
                } catch (err) {
                    console.error('Error loading bookmarks:', err);
                } finally {
                    setLoading(false);
                }
            };
            loadBookmarks();
        }, [])
    );
    
    useEffect(() => {
        const loadOfflineData = async () => {
            try {
                const stored = await AsyncStorage.getItem(Constants.AsyncStorageKeys.educationalData);
    
                // If data is not stored yet, save the default educational array
                if (!stored) {
                    await AsyncStorage.setItem(
                        Constants.AsyncStorageKeys.educationalData,
                        JSON.stringify(educational)
                    );
                }
    
                const parsed = stored ? JSON.parse(stored) : educational;
    
                const enriched = parsed.map((item: any) => ({
                    ...item,
                    isSelected: false,
                }));
    
                setEducationalData(enriched);
            } catch (err) {
                console.error("Error loading educational data:", err);
                setEducationalData(
                    educational.map((item) => ({
                        ...item,
                        isSelected: false,
                    }))
                );
            } finally {
                setLoading(false);
            }
        };
    
        loadOfflineData();
    }, []);
    

    const toggleBookmark = async (id: string) => {
        const updated = bookmarks.includes(id)
            ? bookmarks.filter((b) => b !== id)
            : [...bookmarks, id];
        setBookmarks(updated);
        await AsyncStorage.setItem(Constants.AsyncStorageKeys.bookmark, JSON.stringify(updated));
    };

    const onItemClick = (item: any) => {
        const updatedData = educationalData.map((edItem) =>
            edItem.id === item.id
                ? { ...edItem, isSelected: !edItem.isSelected }
                : edItem
        );
        setEducationalData(updatedData);

        navigation.navigate('DetailsScreen', {
            selectedItem: item,
        });
    };

    const filteredData = educationalData.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'All' || item.category === category;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', ...new Set(educational.map((item) => item.category))];

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    const _renderFlatListItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <CategoriesItems
                thumbnail={item.thumbnail}
                title={item.title}
                category={item.category}
                duration={item.duration}
                onItemClick={() => onItemClick(item)}
                toggleBookmark={() => toggleBookmark(item.id)}
                bookmarked={bookmarks.includes(item.id)}
                isSelected={item.isSelected}
            />
        );
    };

    const _renderCategoryItem = ({ item }: { item: string }) => {
        return (
            <TouchableOpacity onPress={() => setCategory(item)} style={{ margin: normalize(5) }}>
                <CustomText Style={{
                        padding: 8,
                        backgroundColor: category === item ? '#333' : '#ccc',
                        color: category === item ? '#fff' : '#000',
                        borderRadius: 8,
                    }} title={item}/>
            </TouchableOpacity>
        );
    };

    return (
        <View style={AppStyles.mainContainer}>
            <View style={[config.Utility.getStatusBarStyle(AppColors.COLOR_TRASPARENT)]} />
            <SafeAreaView style={AppStyles.safeAreaView}>
            <CustomHeader
                    title={t('home')}
                    onRightButtonPress={() => navigation.navigate('BookmarksScreen')}
                    rightImage={images.icons.bookmarkFill}
                    rightButtonWidth={normalize(50)}
                />
                <View style={styles.container}>
                    <TextInput
                        placeholder="Search"
                        style={{ borderWidth: 1, borderRadius: 8, padding: 8, marginBottom: 10 }}
                        value={search}
                        onChangeText={setSearch}
                    />
                    <View>
                    <FlatList
                        horizontal
                        data={categories}
                        keyExtractor={(item) => item}
                        renderItem={_renderCategoryItem}
                        showsHorizontalScrollIndicator={false}
                    />
                    </View>
                    <View style={{marginBottom: normalize(270), marginTop: normalize(10)}}> 
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item.id}
                        renderItem={_renderFlatListItem}
                        showsVerticalScrollIndicator={false}
                    />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: normalize(10),
    },
});

export default HomeScreen;