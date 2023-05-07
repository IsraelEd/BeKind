import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image } from 'react-native';

import Cadastro from './src/pages/Cadastro/Cadastro';
import Login from './src/pages/Login/Login';
import RecEmail from './src/pages/RecSenha/RecEmail';
import RecCodigo from './src/pages/RecSenha/RecCodigo';
import RecSenha from './src/pages/RecSenha/RecSenha';
import Carrossel from './src/pages/Carrossel/Carrossel';

const Stack = createNativeStackNavigator();


export default function App() {


  
return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Login">



    <Stack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Carrossel"
      component={Carrossel}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="RecEmail"
      component={RecEmail}
      options={({ navigation }) => ({
        title: '', headerStyle: {backgroundColor: '#F5F5F5'},
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Image style={{width:35, resizeMode:'contain',}} source={require('./src/pages/img/seta.png')}/>
          </TouchableOpacity>
        ),
      })}
    />

    <Stack.Screen
      name="RecCodigo"
      component={RecCodigo}
      options={({ navigation }) => ({
        title: '', headerStyle: {backgroundColor: '#F5F5F5'},
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Image style={{width:35, resizeMode:'contain',}} source={require('./src/pages/img/seta.png')}/>
          </TouchableOpacity>
        ),
      })}
    />

        <Stack.Screen
      name="RecSenha"
      component={RecSenha}
      options={({ navigation }) => ({
        title: '', headerStyle: {backgroundColor: '#F5F5F5'},
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Image style={{width:35, resizeMode:'contain',}} source={require('./src/pages/img/seta.png')}/>
          </TouchableOpacity>
        ),
      })}
    />

  </Stack.Navigator>
</NavigationContainer>
);
}
