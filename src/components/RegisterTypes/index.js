import React, { useState } from "react";
import {RegisterContainer, RegisterTypeButton, RegisterLabel} from './styles';


export default function RegisterTypes({type, sendTypeChanged}){
  const [typeChecked, setTypeChecked] = useState(type);
  console.log(type)
  function changeType(name){
    if(name === 'receita'){
      setTypeChecked('receita');
      sendTypeChanged('receita');
    } else {
      setTypeChecked('despesa');
      sendTypeChanged('despesa');
    }
  }

  return(
    <RegisterContainer>
      <RegisterTypeButton 
      checked={typeChecked === 'receita' ? true : false} 
      onPress={() => changeType('receita')}>
        <RegisterLabel>
          Receita
        </RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
       checked={typeChecked === 'despesa' ? true : false}
       onPress={() => changeType('despesa')}>
        <RegisterLabel>
          Despesa
        </RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  )

}