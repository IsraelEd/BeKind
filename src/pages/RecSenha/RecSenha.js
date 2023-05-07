import React, { useState } from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';
import Constants from 'expo-constants';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';





export default function RecSenha ({navigation}) {
    
      let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  var [Olho, setOlho] = useState(true);
  var [User, setUser] = useState('');
  var [Senha, setSenha] = useState('');
  var Tentativas = 0;

  function Login() {
    if (User != 'Gabriel' || Senha != '123') {
      alert('Usuário ou senha incorretos. Tente novamente.');
      Tentativas++;

      if (Tentativas == 3) {
        Tentativas = Tentativas * 0;
        alert('Muitas tentativas. Acesso bloqueado.');
      }
    } else {
      alert('Olá ' + User + '! Seja bem-vindo.');
    }
  }

  function Esqueci() {
    alert(
      "Dica do User: Começa com 'Ga' e termina com 'briel'\nDica da Senha: Três primeiros números"
    );
  }

  const [voluntarioPressionado, setVoluntarioPressionado] = useState(false);
  const [ongPressionado, setOngPressionado] = useState(false);

  function handleVoluntarioPress() {
    setVoluntarioPressionado(!voluntarioPressionado);
    setOngPressionado(false);
  }

  function handleOngPress() {
    setOngPressionado(!ongPressionado);
    setVoluntarioPressionado(false);
  }

function handleEnviarPress() {
  Alert.alert(
    "Recuperação de Senha",
    "Sua senha foi redefinida com sucesso",
    [
      { text: "OK", onPress: () => navigation.navigate('Login') }
    ],
    { 
      titleStyle: styles.alertTitle,
      messageStyle: styles.alertMessage,
      alertContainerStyle: styles.alertContainer,
    }
  );
}


  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../img/LogoMinimizada.png')}
      />


          <Text style={styles.Text}>Redefinir Senha</Text>

        <View style={styles.InputArea}>
              <Image style={styles.Logo, {width:23, marginRight:10, resizeMode:'contain',}} source={require('../img/lock.png')}/>
          <TextInput style = {styles.Input} placeholder='Nova senha' placeholderTextColor='#7E7E7E'/>
        </View>

       <View style={styles.InputArea}>
              <Image style={styles.Logo, {width:23, marginRight:10, resizeMode:'contain',}} source={require('../img/lockCheck.png')}/>
          <TextInput style = {styles.Input} placeholder='Confirmar senha' placeholderTextColor='#7E7E7E'/>
        </View>

        <TouchableOpacity onPress={handleEnviarPress}>
          <Text style = {styles.Botao} value={Tentativas}> Redefinir</Text>
        </TouchableOpacity>

      </View>
        
 
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft:30,
    marginRight:30,
  },

  Logo: {
    width: 130,
    height: 130,
    resizeMode:'contain',
    marginTop:65,
  }, 

   
  Text: {
    fontFamily: 'Poppins_700Bold', 
    fontSize: 30,
    color: 'Black',
    marginTop:40,
    
  },


  InputArea: {
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    borderRadius: 8,
    fontFamily: 'Poppins_400Regular', 
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 20,
    color: 'black', 
    borderColor:'#7E7E7E',
    borderWidth:1,
},


  Input: {
    width: '85%',
    color: 'black',
    fontFamily: 'Poppins_400Regular', 
    outline: 'none'

},



  Botao:{
    backgroundColor: "black",
    borderRadius: 8,
    padding: 13,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 30,
    textAlign:'center',


  },

  

});
