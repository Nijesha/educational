import { StyleSheet } from 'react-native';
import AppColors from './colors';

const AppStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppColors.COLOR_TRASPARENT,
    },
    safeAreaView: {
         flex: 1 
    }
});

export default AppStyles;
