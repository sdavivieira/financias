import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #${props => props.bg};
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

export const Label = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #FFF;
`;

export const Balance = styled.Text`
  font-size: 30px;
  color: #FFF;
  margin-top: 5px;
`;

