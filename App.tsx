import { PaperProvider } from "react-native-paper";
import Contador from "./src/pages/Contador";

export default function App() {
  return (
    <PaperProvider>
      <Contador />
    </PaperProvider>
  );
}
