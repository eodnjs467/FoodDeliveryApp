import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Order from './src/screens/Orders';
import Delivery from './src/screens/Delivery';
import SignIn from './src/screens/SignIn';
import Setting from './src/screens/Settings';
import SignUp from './src/screens/SignUp';

export type LoggedInParamList = {
  Orders: {};
  Settings: {};
  Delivery: {};
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: {};
  SignUp: {};
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name={'Orders'}
            component={Order}
            options={{title: '오더 목록'}}
          />
          <Tab.Screen
            name={'Delivery'}
            component={Delivery}
            options={{title: 'Delivery', headerShown: false}}
          />
          <Tab.Screen
            name={'Settings'}
            component={Setting}
            options={{title: '내정보'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={'SignUp'}
            component={SignUp}
            options={{title: '회원가입'}}
          />
          <Stack.Screen
            name={'SignIn'}
            component={SignIn}
            options={{title: '로그인'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
