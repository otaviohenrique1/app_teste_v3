import { Appbar, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Main from '../components/Main';
import { StyleSheet } from 'react-native';
import { CameraView, CameraType, useCameraPermissions,  } from 'expo-camera';

type Props = NativeStackScreenProps<RootStackParamList, "PrevisaoTempo">;

export default function PrevisaoTempo({ navigation }: Props) {

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Previsao de Tempo" />
      </Appbar.Header>
      <Main>
        <Text variant="displayLarge" style={{ textAlign: "center" }}>PrevisaoTempo</Text>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
