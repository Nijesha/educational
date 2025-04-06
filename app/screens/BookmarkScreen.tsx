import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import CategoriesItems from "../components/FlatListItems/CategoriesItems";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants, educational } from "../config/constants";
import AppColors from "../config/colors";
import config from "../config";
import CustomHeader from "../components/CustomHeader";
import { t } from "i18next";
import images from "../config/images";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppStyles from "../config/app_styles";
import normalize from "../config/normalize";

type RootStackParamList = {
  BookmarksScreen: {}
};

type Props = NativeStackScreenProps<RootStackParamList, 'BookmarksScreen'>;

const BookmarksScreen = ({ route, navigation }: Props) => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [bookmarkedItems, setBookmarkedItems] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const loadBookmarks = async () => {
      const stored = await AsyncStorage.getItem(Constants.AsyncStorageKeys.bookmark);
      const ids = stored ? JSON.parse(stored) : [];
      setBookmarks(ids);
      const filtered = educational.filter(item => ids.includes(item.id));
      setBookmarkedItems(filtered);
    };
    loadBookmarks();
  }, []);

  const toggleBookmark = async (id: string) => {
    const updated = bookmarks.includes(id)
      ? bookmarks.filter(b => b !== id)
      : [...bookmarks, id];
    setBookmarks(updated);
    setBookmarkedItems(educational.filter(item => updated.includes(item.id)));
    await AsyncStorage.setItem(Constants.AsyncStorageKeys.bookmark, JSON.stringify(updated));
  };

  const _renderFlatListItem = ({ item, index }: { item: any, index: number }) => {
    return(
          <CategoriesItems
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              category={item.category}
              duration={item.duration}
              toggleBookmark={toggleBookmark}
              bookmarked={bookmarks.includes(item.id)}
              isSelected={selectedId === item.id}
              onItemClick={() =>
                setSelectedId(prev => (prev === item.id ? null : item.id))
              } />
    )
  }

  return (
    <View style={AppStyles.mainContainer}>
      <View style={[config.Utility.getStatusBarStyle(AppColors.COLOR_TRASPARENT)]} />
      <SafeAreaView style={AppStyles.safeAreaView}>
        <CustomHeader
          title={t('Bookmark')}
          onLeftButtonPress={() => navigation.pop()}
          leftImage={images.icons.back}
          isShowLeftButton
        />
         <View style={styles.container}>
        <FlatList
          data={bookmarkedItems}
          keyExtractor={(item) => item.id}
          renderItem={_renderFlatListItem}
        />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: normalize(10),
},
})

export default BookmarksScreen;
