import { Picker } from "@react-native-picker/picker";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
import React from "react";
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";
import { StyleProp, TextStyle } from "react-native";
import { HelperText } from "react-native-paper";

interface CampoSelectProps<T extends FieldValues, L = ItemValue> {
  control: Control<T, any>;
  style?: StyleProp<TextStyle>;
  name: any;
  errors: FieldError | undefined;
  lista: {
    label: string;
    value: L;
  }[];
}

export function CampoSelect<T extends FieldValues, L = ItemValue>(props: CampoSelectProps<T, L>) {
  const { control, name, errors, style } = props;

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            style={style}
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
        name={name}
      />
      {errors && <HelperText type="error">Campo vazio</HelperText>}
    </>
  );
}