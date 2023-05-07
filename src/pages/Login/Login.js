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





export default function Login ({navigation}) {
    
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


const [voluntarioPressionado, setVoluntarioPressionado] = useState(false);
const [ongPressionado, setOngPressionado] = useState(false);
const [tipoUsuario, setTipoUsuario] = useState('voluntario');
const [placeholder, setPlaceholder] = useState('Nome de usuário/CPF');

function handleVoluntarioPress() {
  if (!voluntarioPressionado) {
    setVoluntarioPressionado(true);
    setOngPressionado(false);
    setTipoUsuario('voluntario');
    setPlaceholder('Nome de usuário/CNPJ');
  }
}

function handleOngPress() {
  if (!ongPressionado) {
    setOngPressionado(true);
    setVoluntarioPressionado(false);
    setTipoUsuario('ong');
    setPlaceholder('Nome de usuário/CPF');
  }
}



  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../img/LogoMinimizada.png')}
      />
      <View style={styles.Login}>
        <TouchableOpacity
          style={[
            styles.Selecao1,
            voluntarioPressionado && {
              backgroundColor: '#F5F5F5',
              borderColor: 'black',
            },
          ]}
          onPress={handleOngPress}>

          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 15,
              color: voluntarioPressionado ? 'black' : '#F5F5F5',
              display:'flex',
              marginTop:5,
              textAlign:'center',
            }}>
            {' '}
            Voluntário
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.Selecao2,
            voluntarioPressionado && {
              backgroundColor: 'black',
              borderColor: 'black',
            },
          ]}
          onPress={handleVoluntarioPress}>
          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 15,
              color: voluntarioPressionado ? '#F5F5F5' : 'black',
              display:'flex',
              marginTop:5,
              textAlign:'center',
            }}>
            {' '}
            ONG
          </Text>
        </TouchableOpacity>

            
          </View>


          <Text style={styles.Text}>Entrar</Text>

        <View style={styles.InputArea}>
              <Image style={styles.Logo, {width:23, marginRight:10, resizeMode:'contain',}} source={require('../img/user.png')}/>
          <TextInput style = {styles.Input} placeholder={placeholder} placeholderTextColor='#7E7E7E'/>
        </View>

        <View style={styles.InputArea}>
         <Image style={styles.Logo, {width:23,  marginRight:10, resizeMode:'contain',}} source={require('../img/cpf.png')}/>
          <TextInput style = {styles.Input} placeholder='Senha' placeholderTextColor='#7E7E7E'/>
        </View>

        <TouchableOpacity onPress = {Login}>
          <Text style = {styles.Botao} value={Tentativas}> Entrar</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => navigation.navigate ('Cadastro')}> 
          <Text style = {styles.Paragrafo1}> <Text>Não possui cadastro?</Text> <Text style={{fontFamily: 'Poppins_700Bold', color:'#007CE0'}}>Cadastre-se!</Text> </Text>
        </TouchableOpacity>

      <View style={styles.container2}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.navigate('RecEmail')}>
            <Text style={styles.Paragrafo2}>
              <Text>Esqueceu a senha?</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>



      </View>
        
 
  );
}






const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft:30,
    marginRight:30,
  },

  container2: {
  flex: 1,
  justifyContent: 'flex-end',
},

  content: {
  alignItems: 'center',
  paddingBottom: 30,
},
  Paragrafo2: {
  fontFamily: 'Poppins_400Regular',
  fontSize: 15,
  color: '#7E7E7E',
  marginTop: 15,
  textAlign: 'center',
},

  Logo: {
    width: 130,
    height: 130,
    resizeMode:'contain',
    marginTop:65,
  },

  Paragrafo1: {
    fontFamily: 'Poppins_400Regular', 
    fontSize: 15,
    color: 'black',
    marginTop: 15,
    textAlign:'right',
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

  Login:{
    display:'flex',
    width:'100%',
    flexDirection:'row',
    marginTop:25,
  },  

  Selecao1:{
    display:'flex',
    backgroundColor: "black",
    borderRadius: 8,
    padding: 10,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    fontSize: 15,
    color:'white',
    textAlign:'center',
    width:'50%',
    borderColor:'Black',
    borderWidth:1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight:'none',
    borderRightColor:'black',
  },
  Selecao2:{
    display:'flex',
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign:'center',
    width:'50%',
    borderColor:'Black',
    borderWidth:1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft:'none',
    borderLeftColor:'black',
  },
  

});
