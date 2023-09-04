import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {CommonSpacer} from '../../common-ui';
import {CommonSafeArea} from '../../common-ui/common-safe-area/common-safe-area';
import {useHomeScreen} from './hooks/use-home-screen';
import styles from './styles';

export const HomeScreen = (): JSX.Element => {
  const {onButtonClick, data} = useHomeScreen();
  return (
    <CommonSafeArea>
      <View>
        <Text>Home screen</Text>
        <TouchableOpacity onPress={onButtonClick}>
          <CommonSpacer multiplier={4} />
          <Text>About screen</Text>
          <CommonSpacer multiplier={4} />
          {data && <Image source={{uri: data.message}} style={styles.image} />}
        </TouchableOpacity>
      </View>
    </CommonSafeArea>
  );
};
