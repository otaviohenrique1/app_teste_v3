import { Picker } from "@react-native-picker/picker";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
import React from "react";
import { Control, Controller, FieldError, FieldPath, FieldValues, Path } from "react-hook-form";
import { StyleProp, TextStyle } from "react-native";
import { HelperText } from "react-native-paper";

interface CampoSelectProps<T extends FieldValues, L = ItemValue, TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  control: Control<T, TName>;
  style?: StyleProp<TextStyle>;
  name: Path<T>;
  errors: FieldError | undefined;
  lista: {
    label: string;
    value: L;
  }[];
}

export function CampoSelect<T extends FieldValues, L = ItemValue>(props: CampoSelectProps<T, L>) {
  const { control, name, errors, style, lista } = props;

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
            {lista.map((item, index) => {
              return (
                <Picker.Item key={index} label={item.label} value={item.value} />
              );
            })}
          </Picker>
        )}
        name={name}
      />
      {errors && <HelperText type="error">Campo vazio</HelperText>}
    </>
  );
}