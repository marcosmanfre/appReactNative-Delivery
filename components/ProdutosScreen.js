import { ScrollView, Image} from 'react-native';
import { Card, Button, Title } from 'react-native-paper';
import { styles }  from './Style';
import { useContext } from 'react';
import { DataContext } from '../Context';


function HomeScreen({ navigation }) {
  const { setNomeProduto, setValorProduto, setQuantProduto, setImagemProduto } =
    useContext(DataContext);

  const detalhes = (nomeProduto, valorProduto, quantProduto, imagemProduto) => {
    setNomeProduto(nomeProduto);
    setValorProduto(valorProduto);
    setQuantProduto(quantProduto);
    setImagemProduto(require(imagemProduto));
    navigation.navigate('Compras');
  };

  return (
    <ScrollView style={styles.scrolview}>

        

      <Card style={styles.card}>
        <Card.Title title="Ragu de Maminha" subtitle="Com purê de mandioquinha"/>
        <Card.Content>
          <Image source={require('../assets/ragu.jpg')} style={styles.image} />
        </Card.Content>
        <Card.Actions>
          <Button icon="menu" mode="contained"
            onPress={() => detalhes('Ragu de Maminhas', 55.90, 0,'../assets/ragu.jpg')}>
            Detalhes
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Moqueca de Tilápia" subtitle="Com arroz negro" />
        <Card.Content>
          <Image source={require('../assets/tilapia.jpg')} style={styles.image} />
        </Card.Content>
        <Card.Actions>
          <Button icon="menu" mode="contained"
            onPress={() => detalhes('Moqueca de Tilápia', 59.90, 0, '../assets/tilapia.jpg')}>
            Detalhes
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Peito de Frango" subtitle="Com macarrão integral" />
        <Card.Content>
          <Image source={require('../assets/frango.jpg')} style={styles.image} />
        </Card.Content>
        <Card.Actions>
          <Button icon="menu" mode="contained"
            onPress={() => detalhes('Peito de Frango', 35, 0, '../assets/frango.jpg')}>
            Detalhes
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Arroz Primavera" subtitle="Com legumes salteados" />
        <Card.Content>
          <Image source={require('../assets/arroz.jpg')} style={styles.image} />
        </Card.Content>
        <Card.Actions>
          <Button icon="menu" mode="contained"
            onPress={() => detalhes('Arroz Primavera', 42, 0, '../assets/arroz.jpg')}>
            Detalhes
          </Button>
        </Card.Actions>
      </Card>

     <Card style={styles.card}>
        <Card.Title title="Bacalhau com Natas" subtitle="Com batata palha" />
        <Card.Content>
          <Image source={require('../assets/bacalhau.jpg')} style={styles.image} />
        </Card.Content>
        <Card.Actions>
          <Button icon="menu" mode="contained"
            onPress={() => detalhes('Bacalhau com Natas', 48, 0,'../assets/bacalhau.jpg')}>
            Detalhes
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>

    
  );
}

export default HomeScreen;


