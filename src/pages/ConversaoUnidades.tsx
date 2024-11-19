import { Appbar, Button, HelperText, Text, } from "react-native-paper";
import { Container } from '../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Main from '../components/Main';
import { StyleSheet } from 'react-native';
import { Controller, useForm } from "react-hook-form";
import { schemaConversaoUnidades, valoresIniciaisConversaoUnidades } from "../utils/constantes";
import { yupResolver } from "@hookform/resolvers/yup";
import { CampoTexto } from "../components/CampoTexto";
import { Picker } from "@react-native-picker/picker";

type Props = NativeStackScreenProps<RootStackParamList, "ConversaoUnidades">;

export default function ConversaoUnidades({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaConversaoUnidades),
    defaultValues: valoresIniciaisConversaoUnidades,
  })

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Conversao de Unidades" />
      </Appbar.Header>
      <Main>
        <CampoTexto
          control={control}
          label="Campo"
          name="campo"
          errors={errors.campo}
          style={styles.campoTexto}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Picker
              style={styles.picker}
              selectedValue={value}
              onBlur={onBlur}
              onValueChange={(itemValue) => onChange(itemValue)}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Quilômetro" value="km" />
              <Picker.Item label="Metro" value="m" />
              <Picker.Item label="Centímetro" value="cm" />
              <Picker.Item label="Milímetro" value="mm" />
            </Picker>
          )}
          name="unidade1"
        />
        {errors.unidade1 && <HelperText type="error">Campo vazio</HelperText>}
        <Text
          variant="headlineLarge"
          style={{ textAlign: "center" }}
        >Resultado: </Text>
        <Button
          mode="contained"
          onPress={handleSubmit(() => { })}
          style={{ marginVertical: 10 }}
        >Calcular</Button>
        <Button
          mode="outlined"
          onPress={() => reset()}
        >Limpar</Button>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  },
  campoTexto: {
    margin: 10,
  },
  picker: {
    borderWidth: 1,
    borderStyle:  "solid",
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#CBC6",
    margin: 10,
  }
});
