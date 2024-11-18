import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contador from './Contador';
import HomePage from './HomePage';
import Citacoes from './Citacoes';

export type RootStackParamList = {
  HomePage: undefined;
  Contador: undefined;
  Citacoes: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}