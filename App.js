import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutosScreen from './components/ProdutosScreen';
import CarrinhoScreen from './components/CarrinhoScreen';
import ComprasScreen from './components/ComprasScreen';
import Context from './Context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Produtos') {
                return <Ionicons name='fast-food' size={size} color={color} />;
              } else if (route.name === 'Carrinho') {
                return <Ionicons name='cart' size={size} color={color} />;
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'dodgerblue',
          })}>
          <Tab.Screen name="Produtos" component={ProdutosScreen} />
          <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
          <Tab.Screen name="Compras" component={ComprasScreen} options={{tabBarStyle: { display: "none" }, tabBarButton: () => null }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Context>
  );

}
