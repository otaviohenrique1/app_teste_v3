import { Appbar, Text } from "react-native-paper";
import Container from '../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Main from '../components/Main';
import { StyleSheet } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, "ConversaoUnidades">;

export default function ConversaoUnidades({ navigation }: Props) {
  
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Conversao de Unidades" />
      </Appbar.Header>
      <Main>
        <Text>Conversao de Unidades</Text>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
