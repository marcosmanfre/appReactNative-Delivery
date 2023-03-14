import { FlatList } from 'react-native';
import { Card, Paragraph, Button, List } from 'react-native-paper';
import { styles, valorFormatado } from './Style';
import { useContext } from 'react';
import { DataContext } from '../Context';


const CarrinhoScreen = ({ navigation }) => {
  let { produtos, setProdutos, total, setTotal, quantProduto, setQuantProduto } = useContext(DataContext);
  

const excluirProduto = (index) => {
  let produto = produtos;
  let quantidade = quantProduto[produto[index].nome];
  setTotal(total - produto[index].valor * quantidade);
  produto = produto.filter((item) => item !== produto[index]);
  setProdutos(produto);
  const newQuantidades = { ...quantProduto };
  delete newQuantidades[produto[index].nome];
  setQuantProduto(newQuantidades);
};

  return (
    <Card style={styles.card}>
      <Card.Title title="Produtos no Carrinho" />
      <Card.Content>
        {total != 0 ? (
          <Paragraph>
            Valor total:
            {valorFormatado(total)}
          </Paragraph>
        ) : (
          <></>
        )}
        {produtos.length ? (
          <FlatList
            data={produtos}
            renderItem={({ item, index }) => {
              return (                
                <List.Accordion
                  title={item.nome}
                  left={(props) => <List.Icon icon="cart" />}>
                  
                  <List.Item title={'Valor: ' + valorFormatado(item.valor)} />
              <List.Item 
  left={(props) => (
    <Button
      mode="contained"
      onPress={() => {
        const newQuantidades = { ...quantProduto };
        newQuantidades[item.nome] = quantProduto[item.nome] ? quantProduto[item.nome] - 1 : 0;
        setQuantProduto(newQuantidades);
        setTotal(total - item.valor);
      }}
      disabled={!quantProduto[item.nome]}
    >
      -
    </Button>
  )}
/>
<List.Item 
  left={(props) => (
    <Paragraph>{quantProduto[item.nome] || 0}</Paragraph>
  )}
/>
<List.Item 
  left={(props) => (
    <Button
      mode="contained"
      onPress={() => {
        const newQuantidades = { ...quantProduto };
        newQuantidades[item.nome] = quantProduto[item.nome] ? quantProduto[item.nome] + 1 : 1;
        setQuantProduto(newQuantidades);
        setTotal(total + item.valor);
      }}
    >
      +
    </Button>
  )}
/>

                  <List.Item
                    left={(props) => (
                      <Button
                        icon="delete"
                        mode="contained"
                        onPress={() => excluirProduto(index)}>
                        Excluir
                      </Button>
                    )}
                  />
 
                </List.Accordion>
                
              );
            }}
          />
        ) : (
          <Paragraph>Nenhum produto no carrinho!</Paragraph>
        )}
      </Card.Content>
    </Card>
  );
};

export default CarrinhoScreen;
