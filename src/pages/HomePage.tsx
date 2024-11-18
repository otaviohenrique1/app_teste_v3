import { Appbar, Button } from "react-native-paper";
import Container from '../components/Container';
import { RootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Main from '../components/Main';

type Props = NativeStackScreenProps<RootStackParamList, "HomePage">;

export default function HomePage({ navigation }: Props) {
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Contador" />
      </Appbar.Header>
      <Main>
        <Button
          mode="contained"
          style={styles.botao}
          onPress={() => {
            navigation.push("Contador")
          }}
        >Contador</Button>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
