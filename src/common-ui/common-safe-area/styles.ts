import {
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {ds} from '../../utils';

type StylesType = {
  containerSafeArea: StyleProp<ViewStyle>;
  container: StyleProp<ViewStyle>;
};
type NamedStylesType = StylesType & StyleSheet.NamedStyles<unknown>;

export const styles = (props: {
  $horizontalPadding: number;
}): NamedStylesType => {
  const commonStyle: NamedStylesType = {
    containerSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
      flex: 1,
      paddingHorizontal: ds(props.$horizontalPadding),
    },
  };
  return StyleSheet.create(commonStyle);
};
