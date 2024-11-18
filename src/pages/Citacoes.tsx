import { useEffect, useState } from 'react';
import { Appbar, Text } from "react-native-paper";
import Container from '../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Main from '../components/Main';
import { StyleSheet } from 'react-native';
import axios from "axios";

type Props = NativeStackScreenProps<RootStackParamList, "Citacoes">;

export default function Citacoes({ navigation }: Props) {
  const [citacao, setCitacao] = useState<string>("");

  async function getSlip() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setCitacao(response.data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // axios.get("https://api.adviceslip.com/advice")
    //   .then((data) => {
    //     setCitacao(data.data.advice);
    //     console.log(citacao);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    getSlip();
  }, []);
  

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Citacoes" />
      </Appbar.Header>
      <Main>
        <Text>{citacao}</Text>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
