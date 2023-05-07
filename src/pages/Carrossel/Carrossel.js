import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium} from '@expo-google-fonts/poppins';

import { Card } from 'react-native-paper';



export default function App() {

let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });



  return (
    <View style={{display:'flex',}}>
      <View style={styles.container}>
              <Image style={styles.Logo} source={require('../img/LogoMinimizada.png')}/>
      </View>


      <View styles={{display:'flex',}}>
        <Image style={{resizeMode:'contain', width:'100%', marginTop:-50,}} source={require('../img/Carrossel.png')} />
      </View>
              


          <View style={styles.container}>
              <Text style={styles.Titulo}>BeKind</Text>
              <Text style={{fontFamily:'Poppins_500medium', fontSize:13,}}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</Text>

                      <TouchableOpacity>
                          <Text style = {styles.Botao}> Iniciar</Text>
                      </TouchableOpacity>
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

  Logo: {
    width: 130,
    height: 130,
    resizeMode:'contain',
    marginTop:65,
  }, 

  Titulo:{
    fontFamily: 'Poppins_700Bold', 
    fontSize: 30,
    color: 'Black',
  },

    Botao:{
    backgroundColor: "black",
    borderRadius: 8,
    padding: 15,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 30,
    textAlign:'center',


  },

});
