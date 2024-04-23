import React from "react";
import Cardapio from "./src/screens/cardapio";
import Carrinho from "./src/screens/carrinho";
import CadastroProduto from "./src/screens/CadastroProduto";
import CadastroCliente from "./src/screens/LoginClientes";
import Produto from "./src/RestauranteAtv/CadastroProdutoAtv";
import Cliente from "./src/RestauranteAtv/CadastroClienteAtv";
import CardapioAtv from "./src/RestauranteAtv/CardapioAtv";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Cardapio" component={CardapioAtv} 
        options={{headerShown: false}} />

        <Stack.Screen name="Produto" component={Produto} 
        options={{headerShown: false}} />
      </Stack.Navigator>

      <Stack.Screen name="Cliente" component={Cliente} 
        options={{headerShown: false}} />

    </NavigationContainer>
  );
}
/*9/04*/
export default App;