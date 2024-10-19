import { view } from './storybook.requires';
import AsyncStorage from '@react-native-async-storage/async-storage';

// initReactCerberusNative(Platform.OS === 'ios' ? 'ios' : 'android');

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
