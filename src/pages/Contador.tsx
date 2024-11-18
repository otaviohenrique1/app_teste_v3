import { useState } from 'react';
import { Appbar, Button, Text } from "react-native-paper";
import Container from '../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Main from '../components/Main';
import { StyleSheet } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, "Contador">;

export default function Contador({ navigation }: Props) {
  const [contador, setContador] = useState<number>(0);

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Contador" />
      </Appbar.Header>
      <Main>
        <Text variant="displayLarge" style={{ textAlign: "center" }}>{contador}</Text>
        <Button
          mode="contained"
          style={styles.botao}
          onPress={() => {
            setContador(contador + 1);
          }}
        >Adicionar</Button>
        <Button
          mode="outlined"
          style={styles.botao}
          onPress={() => {
            setContador(contador - 1)
          }}
        >Remover</Button>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
