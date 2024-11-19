import React from 'react';
import {
  Container, 
  TipoText,
  Tipo,
  IconView,
  ValorText
} from './styles';

import { TouchableNativeFeedback, Alert } from 'react-native';

export default function HistoricoList({ data, deleteItem }){

  function handleDeleteItem(){
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {

          text: 'Cancelar',
          style: 'Cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ],
    )
  }
  return(
    <TouchableNativeFeedback onLongPress={handleDeleteItem}>
    <Container>
      <Tipo>
        <IconView tipo={data.type}>
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>

      <ValorText>
        R$ {data.value}
      </ValorText>
    </Container>
    </TouchableNativeFeedback>
  )
}