import { Image, Dimensions } from 'react-native';
import { Card, Button, Title, TextInput } from 'react-native-paper';
import { styles, valorFormatado } from './Style';
import { useContext, useState } from 'react';
import { DataContext } from '../Context';

const ComprasScreen = ( {navigation} ) => {
  let { nomeProduto, setNomeProduto, valorProduto, setValorProduto, 
        imagemProduto, setImagemProduto, produtos, setProdutos, total, setTotal, quantProduto, setQuantProduto } = useContext(DataContext);



  const confirmarCompra = () => {
      let produto = produtos;
      produto.push({nome: nomeProduto, valor: valorProduto, quantidade: quantProduto});
      setProdutos(produto);
      setTotal(Number(total) + Number(valorProduto * quantProduto));
      setNomeProduto(null);
      setValorProduto(0);
      setQuantProduto(0);
      setImagemProduto(null);
      navigation.navigate('Carrinho');
      alert("Produto adicionado ao carrinho com sucesso!")

    
    
  }

  return (
    <Card style={styles.card}>
      <Card.Title title={nomeProduto} />
      <Card.Content>
        <Image source={imagemProduto} style={styles.image}/>
        <Title style={styles.title}>
          {valorFormatado(valorProduto)}
        </Title>
       
   
      </Card.Content>
      <Card.Actions>
        <Button icon="arrow-left" mode="outlined" onPress={() => navigation.navigate('Produtos')} style={styles.button}>
          Voltar
        </Button>
        <Button icon="check" mode="contained" onPress={() => confirmarCompra()} style={styles.button}>
          Adicionar ao Carrinho
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ComprasScreen;
