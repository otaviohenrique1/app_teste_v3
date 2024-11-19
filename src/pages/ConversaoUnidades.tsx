import { Appbar, Button, Text, } from "react-native-paper";
import { Container } from '../components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Main from '../components/Main';
import { StyleSheet } from 'react-native';
import { useForm } from "react-hook-form";
import { schemaConversaoUnidades, valoresIniciaisConversaoUnidades } from "../utils/constantes";
import { yupResolver } from "@hookform/resolvers/yup";
import { CampoTexto } from "../components/CampoTexto";
import { CampoSelect } from "../components/CampoSelect";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "ConversaoUnidades">;

export default function ConversaoUnidades({ navigation }: Props) {
  const [resultado, setResultado] = useState<string>("");

  const lista = [
    { label: "Quilômetro", value: "km" },
    { label: "Metro", value: "m" },
    { label: "Centímetro", value: "cm" },
    { label: "Milímetro", value: "mm" },
  ];

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
        <CampoSelect
          control={control}
          lista={lista}
          errors={errors.unidade1}
          name="unidade1"
          style={styles.picker}
        />
        <CampoSelect
          control={control}
          lista={lista}
          errors={errors.unidade2}
          name="unidade2"
          style={styles.picker}
        />
        <Text
          variant="headlineLarge"
          style={{ textAlign: "center" }}
        >Resultado: {resultado}</Text>
        <Button
          mode="contained"
          onPress={handleSubmit((values) => {
            const { campo, unidade1, unidade2 } = values;
            if ((unidade1 === "m" && unidade2 === "m")
              || (unidade1 === "km" && unidade2 === "km")
              || (unidade1 === "mm" && unidade2 === "mm")
              || (unidade1 === "cm" && unidade2 === "cm")
            ) {
              setResultado(campo);
            }

            else if (unidade1 === "m" && unidade2 === "km") {
              setResultado(String(Number(campo) * 1000));
            } else if (unidade1 === "m" && unidade2 === "cm") {
              setResultado(String(Number(campo) / 100));
            } else if (unidade1 === "m" && unidade2 === "mm") {
              setResultado(String(Number(campo) / 1000));
            } else if (unidade1 === "km" && unidade2 === "m") {
              setResultado(String(Number(campo) / 1000));
            } else if (unidade1 === "km" && unidade2 === "cm") {
              setResultado(String(Number(campo) / 100000));
            } else if (unidade1 === "km" && unidade2 === "mm") {
              setResultado(String(Number(campo) / 1000000));
            } else if (unidade1 === "cm" && unidade2 === "km") {
              setResultado(String(Number(campo) * 100000));
            } else if (unidade1 === "cm" && unidade2 === "m") {
              setResultado(String(Number(campo) * 100));
            } else if (unidade1 === "cm" && unidade2 === "mm") {
              setResultado(String(Number(campo) / 100));
            } else if (unidade1 === "mm" && unidade2 === "m") {
              setResultado(String(Number(campo) * 1000));
            } else if (unidade1 === "mm" && unidade2 === "cm") {
              setResultado(String(Number(campo) * 100));
            } else if (unidade1 === "mm" && unidade2 === "km") {
              setResultado(String(Number(campo) * 1000000));
            }
          })}
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
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#CBC6",
    margin: 10,
  }
});
