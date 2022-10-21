import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SignUp() {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>회원가입</Text>
      {/*<Button title={'이동'} onPress={() => navigation.navigate('SignIn')} />*/}
    </View>
  );
}

export default SignUp;
