import { FormTypesConversaoUnidades } from "../types/types";
import * as yup from "yup";

export const valoresIniciaisConversaoUnidades: FormTypesConversaoUnidades = {
  campo: "",
  unidade1: "",
  unidade2: "",
}

export const schemaConversaoUnidades = yup.object().shape({
  campo: yup.string().required("Campo vazio"),
  unidade1: yup.string().required("Campo vazio"),
  unidade2: yup.string().required("Campo vazio"),
});
