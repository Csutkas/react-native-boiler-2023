import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {ds, dvs} from '../../utils';

type StylesType = {
  container: StyleProp<ViewStyle>;
};
type NamedStylesType = StylesType & StyleSheet.NamedStyles<unknown>;

export const styles = (props: {
  $distance: number;
  $direction: 'vertical' | 'horizontal';
}): NamedStylesType => {
  const commonButtonStyle: NamedStylesType = {
    container: {
      width: props.$direction === 'horizontal' ? ds(props.$distance) : 0,
      height: props.$direction === 'vertical' ? dvs(props.$distance) : 0,
    },
  };
  return StyleSheet.create(commonButtonStyle);
};
