import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';
import {Dog, useHome} from '../../../api-hooks';
import {RootNavigatorParamList} from '../../../navigation';

type UseHomeScreenValue = {
  onButtonClick: () => void;
  data?: Dog;
};

export const useHomeScreen = (): UseHomeScreenValue => {
  const navigation =
    useNavigation<
      StackNavigationProp<RootNavigatorParamList, 'HomeScreenRoute'>
    >();

  const {data} = useHome();

  const onButtonClick = useCallback(() => {
    navigation.navigate('AboutScreenRoute');
  }, [navigation]);

  return {onButtonClick, data};
};
