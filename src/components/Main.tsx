import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface MainProps {
  children: ReactNode;
}

export default function Main(props: MainProps) {
  const { children } = props;
  return (
    <View style={styles.main}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
});
