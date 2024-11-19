import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contador from './Contador';
import HomePage from './HomePage';
import Citacoes from './Citacoes';
import ConversaoUnidades from './ConversaoUnidades';
import LeituraQRCode from './LeituraQRCode';
import PrevisaoTempo from './PrevisaoTempo';

export type RootStackParamList = {
  HomePage: undefined;
  Contador: undefined;
  Citacoes: undefined;
  ConversaoUnidades: undefined;
  LeituraQRCode: undefined;
  PrevisaoTempo: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Contador" component={Contador} />
        <Stack.Screen name="Citacoes" component={Citacoes} />
        <Stack.Screen name="ConversaoUnidades" component={ConversaoUnidades} />
        <Stack.Screen name="LeituraQRCode" component={LeituraQRCode} />
        <Stack.Screen name="PrevisaoTempo" component={PrevisaoTempo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}