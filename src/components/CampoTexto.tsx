import React from "react";
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";
import { HelperText, TextInput } from "react-native-paper";
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";
import { StyleProp, TextStyle } from "react-native";

interface CampoTextoProps<T extends FieldValues> {
  control: Control<T, any>;
  label: TextInputLabelProp;
  style?: StyleProp<TextStyle>;
  name: any;
  errors: FieldError | undefined;
  multiline?: boolean | undefined;
}

export function CampoTexto<T extends FieldValues>(props: CampoTextoProps<T>) {
  const { control, label, name, errors, multiline, style } = props;
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label={label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
            style={style}
          />
        )}
        name={name}
      />
      {errors && <HelperText type="error">Campo vazio</HelperText>}
    </>
  );
}