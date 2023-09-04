import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {AboutScreen, HomeScreen} from '../../screens';
import {RootNavigatorParamList} from '../types/navigator-types';

const Stack = createStackNavigator<RootNavigatorParamList>();

export const RootNavigator = (): JSX.Element | null => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="HomeScreenRoute"
        id={'RootStack'}
        screenOptions={{headerShown: false}}>
        <Stack.Group navigationKey="Login">
          <Stack.Screen name="HomeScreenRoute" component={HomeScreen} />
          <Stack.Screen name="AboutScreenRoute" component={AboutScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};
