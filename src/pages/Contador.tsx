import { useState } from 'react';
import { Appbar, Button, Text } from "react-native-paper";
import Container from '../compoents/Container';

export default function Contador() {
  const [contador, setContador] = useState<number>(0);

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        {/* <Appbar.BackAction onPress={() => { }} /> */}
        <Appbar.Content title="Contador" />
      </Appbar.Header>
      <Text variant="displayLarge" style={{ textAlign: "center" }}>{contador}</Text>
      <Button
        mode="contained"
        onPress={() => {
          setContador(contador + 1);
        }}
      >Adicionar</Button>
      <Button
        mode="outlined"
        onPress={() => {
          setContador(contador - 1)
        }}
      >Remover</Button>
    </Container>
  );
}
