import React, { useState, useRef} from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';


  



const imc = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const inputRef = useRef<TextInput>(null);

const calularImc = (peso: number, altura: number) => {
  const a = altura / 100;
  const imc = peso / (a * a);
  return imc.toFixed(2); 
}

const click = () => {
  const imc = calularImc(Number(peso), Number(altura));
  const imcNumber = Number(imc);

 if (imcNumber < 18.5) {
   Alert.alert('Abaixo do peso'+' o seu imc é : ' +imc);
 }
  else if (imcNumber >= 18.5 && imcNumber < 24.9) {
    Alert.alert('Peso normal'+' o seu imc é : ' +imc);
  }
  else if (imcNumber >= 25 && imcNumber < 29.9) {
    Alert.alert('Sobrepeso'+' o seu imc é : ' +imc);
  }
  else if (imcNumber >= 30 && imcNumber < 34.9) {
    Alert.alert('Obesidade grau 1'+' o seu imc é : ' +imc);
  }
  else if (imcNumber >= 35 && imcNumber < 39.9) {
    Alert.alert('Obesidade grau 2'+' o seu imc é : ' +imc);
  }
  else if (imcNumber >= 40) {
    Alert.alert('Obesidade grau 3'+' o seu imc é : ' +imc);
    
  }
  else {
    Alert.alert('Preencha os campos corretamente');
    
  }

  
  inputRef.current?.focus();



  setAltura('');
  setPeso('');  

 
}







const styles= StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'black',
  },
  text: {
    fontSize: 20, 
    color: 'white',
  },
  textInput: {  
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    margin: 10,
    color: 'white',
    borderRadius: 10,
   
   
      
  },


  logo: {
    width:100,
    height: 200,
    borderRadius: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 30,
    color: '#8B008B',
    fontWeight: 'bold',
    marginBottom: 20,
  } 

  
});




  return (
    <View style={styles.container}>

    <View >
        <Text style= {styles.textTitle}>Calculadora de IMC</Text>
    </View>


    <View >
      <Image  style={styles.logo}   source={require('./img/gordomagro.png')}   />
    </View>

    <View> 
      <Text style= {styles.text}>Peso:</Text>
      <TextInput  style={styles.textInput} ref={inputRef} value={peso} placeholder='Digite seu peso' placeholderTextColor={"#C0C0C0"} onChangeText={setPeso} keyboardType="numeric" ></TextInput>
      <Text style= {styles.text}>Altura:</Text>
      <TextInput style={styles.textInput}  value={altura} placeholder='Digite sua altura em cm' placeholderTextColor={"#C0C0C0"} onChangeText={setAltura} keyboardType="numeric"></TextInput>
      <Button title='Calcular'  color={"#8B008B"} onPress={click}></Button>
    </View>




    </View>
  );

 
}





export default imc;