
// This file is used to manage views for tablet.

import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);

const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 667;

const normalize = (size: number, based: 'width' | 'height' = 'width') => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  
  if (Platform.OS === 'ios' || !DeviceInfo.isTablet()) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize) * 0.87)
  }
  else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize) * 0.85);
  }
};

export default normalize;
