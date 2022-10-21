import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complete from './Complete';
import Ing from './Ing';

const Stack = createNativeStackNavigator();
function Delivery() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Ing'}
        component={Ing}
        options={{title: 'Ing', headerShown: false}}
      />
      <Stack.Screen
        name={'완료'}
        component={Complete}
        options={{title: '완료', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Delivery;
