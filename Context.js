import {useState, createContext} from 'react';

export const DataContext = createContext();

const Context = ({children}) => {
  let [nomeProduto, setNomeProduto] = useState(null);
  let [valorProduto, setValorProduto] = useState(0); 
  let [imagemProduto, setImagemProduto] = useState(null);
  let [produtos, setProdutos] = useState([]);
  let [total, setTotal] = useState(0); 
  let [quantProduto, setQuantProduto] = useState([0]); 

  return (
    <DataContext.Provider 
      value={{nomeProduto, setNomeProduto, valorProduto, setValorProduto, imagemProduto, setImagemProduto, produtos, setProdutos, total, setTotal, quantProduto, setQuantProduto}}>
      {children} 
    </DataContext.Provider>
  );

}

export default Context;

