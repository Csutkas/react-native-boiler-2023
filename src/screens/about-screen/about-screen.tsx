import React from 'react';
import {Text, View} from 'react-native';
import {CommonSafeArea} from '../../common-ui/common-safe-area/common-safe-area';

export const AboutScreen = (): JSX.Element => {
  return (
    <CommonSafeArea>
      <View>
        <Text>About screen</Text>
      </View>
    </CommonSafeArea>
  );
};
