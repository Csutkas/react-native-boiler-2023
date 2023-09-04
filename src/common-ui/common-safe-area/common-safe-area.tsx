import React, {memo, useMemo} from 'react';
import {SafeAreaView, StatusBar, StatusBarStyle, View} from 'react-native';

import {colors} from '../../assets';
import {ds, SCREEN_DEFAULT_HORIZONTAL_PADDING} from '../../utils';
import {styles} from './styles';

interface CommonSafeAreaProps {
  children: JSX.Element;
  horizontalPadding?: number;
  statusBarStyle?: StatusBarStyle | null;
}

export const CommonSafeArea = memo(
  ({
    children,
    horizontalPadding = ds(SCREEN_DEFAULT_HORIZONTAL_PADDING),
    statusBarStyle = 'dark-content',
  }: CommonSafeAreaProps) => {
    const styleMemo = useMemo(
      () =>
        styles({
          $horizontalPadding: horizontalPadding,
        }),
      [horizontalPadding],
    );

    return (
      <SafeAreaView style={styleMemo.containerSafeArea}>
        <StatusBar
          backgroundColor={colors.TRANSPARENT}
          barStyle={statusBarStyle}
          translucent
        />
        <View style={styleMemo.container}>{children}</View>
      </SafeAreaView>
    );
  },
);
