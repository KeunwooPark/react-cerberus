import { initReactCerberusNative } from '@react-cerberus/native';
import { view } from './storybook.requires';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

initReactCerberusNative(Platform.OS === 'ios' ? 'ios' : 'android');

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

console.log('StorybookUIRoot', StorybookUIRoot);
export default StorybookUIRoot;
