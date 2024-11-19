import React, {useState} from "react";
import { BackGround, Input, SubmitButton, SubmitText } from "./styles";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Header from '../../components/Header'
import RegisterTypes from "../../components/RegisterTypes";
import api from '../../services/api'
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";


export default function New(){
  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');
  const navigation =  useNavigation();


  function handleSubmit(){
    Keyboard.dismiss();

    if(isNaN(parseFloat(valueInput)) || type === null){
      alert('Prencha todos os campos');
      return;
    }
    Alert.alert(
      'Confirmando Dados',
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd(){
    await api.post('/receive',{
    description: labelInput,
    value: Number(valueInput),
    type: type,
    date: format(new Date(), 'dd/MM/yyyy')
    })
    setLabelInput('');
    setValueInput('');
    navigation.navigate('Home')
  }

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <BackGround>
      <Header title='Registrando'/>
      <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
        <Input
        placeholder='Descrição desse Registro'
        value={labelInput}
        onChangeText={(text) => setLabelInput(text)}
        />
        <Input
        placeholder='Valor Desejado'
        keyboardType='numeric'
        value={valueInput}
        onChangeText={(text) => setValueInput(text)}
        />

        <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>
        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </SafeAreaView>
    </BackGround>
    </TouchableWithoutFeedback>
  )
} 