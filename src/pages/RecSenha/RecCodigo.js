import React, { useState } from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';





export default function RecEmail ({navigation}) {
    
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

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../img/LogoMinimizada.png')}
      />


          <Text style={styles.Text}>Inisira o Código</Text>

        <View style={styles.InputArea}>
              <Image style={styles.Logo, {width:23, marginRight:10, resizeMode:'contain',}} source={require('../img/hash.png')}/>
          <TextInput style = {styles.Input} placeholder='Código' placeholderTextColor='#7E7E7E'/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate ('RecSenha')}>
          <Text style = {styles.Botao} value={Tentativas}> Enviar</Text>
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
