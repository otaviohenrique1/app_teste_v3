import { Appbar, Button } from "react-native-paper";
import { Container } from '../components/Container';
import { RootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Main from '../components/Main';

type Props = NativeStackScreenProps<RootStackParamList, "HomePage">;

interface ListaBotoesTypes {
  id: number;
  label: string;
  rota: "Contador" | "Citacoes" | "ConversaoUnidades" | "LeituraQRCode" | "PrevisaoTempo";
}

export default function HomePage({ navigation }: Props) {
  const listaBotoes: ListaBotoesTypes[] = [
    { id: 1, label: "Contador", rota: "Contador" },
    { id: 2, label: "Citacoes", rota: "Citacoes" },
    { id: 3, label: "ConversaoUnidades", rota: "ConversaoUnidades" },
    { id: 4, label: "LeituraQRCode", rota: "LeituraQRCode" },
    { id: 5, label: "PrevisaoTempo", rota: "PrevisaoTempo" },
  ];

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="HomePage" />
      </Appbar.Header>
      <Main>
        {listaBotoes.map((item) => {
          return (
            <Button
              key={item.id}
              mode="contained"
              style={styles.botao}
              onPress={() => {
                navigation.push(item.rota)
              }}
            >{item.label}</Button>
          );
        })}
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
