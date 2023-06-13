const { createContext, useState, useContext, useEffect } = require("react");

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider= ({children}) => {

    const [carrinho, setCarrinho] = useState([])
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)
    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos} = useContext(CarrinhoContext)

    function mudarQuantidade(id, quantidade){
        return carrinho.map(itemCarrinho => {
            if(itemCarrinho.id === id) itemCarrinho.quantidade += quantidade;
            return itemCarrinho
        })
    }

    function removerProduto(id){
        const produto = carrinho.find(itemCarrinho => itemCarrinho.id === id)
        const eOUltimo= produto.quantidade === 1

        if(eOUltimo){
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemCarrinho => itemCarrinho.id !== id))
        }

        setCarrinho(mudarQuantidade(id, -1))
    }


    function adicionarProduto(novoProduto) {
        const temProduto = carrinho.some(
          (itemCarrinho) => itemCarrinho.id === novoProduto.id
        );
    
        if(!temProduto){
            novoProduto.quantidade = 1;
            return setCarrinho((carrinhoAnterior) => [
                ...carrinhoAnterior,
                novoProduto,
              ]);
        }
    
        setCarrinho(mudarQuantidade(novoProduto.id, +1))
       
      }

      useEffect(() => {
        const novaQuantidade = carrinho.reduce((contador, produto) => 
        contador + produto.quantidade, 0);
        setQuantidadeProdutos(novaQuantidade)

      }, [carrinho, setQuantidadeProdutos])

    return {
        carrinho, setCarrinho, adicionarProduto, removerProduto, quantidadeProdutos
    }
}