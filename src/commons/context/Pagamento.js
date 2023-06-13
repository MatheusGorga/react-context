const { createContext, useState, useContext } = require("react");

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
  const tipoPagamento = [
    {
      nome: "Boleto",
      juros: 1,
      id: 1,
    },
    {
      nome: "Cartão de Credito",
      juros: 1.3,
      id: 2,
    },
    {
      nome: "Pix",
      juros: 1,
      id: 3,
    },
    {
      nome: "Crediario",
      juros: 1.5,
      id: 4,
    },
  ];

  const [formaDePagamento, setFormaDePagamento] = useState(tipoPagamento[0]);

  return (
    <PagamentoContext.Provider
      value={{
        tipoPagamento,
        formaDePagamento,
        setFormaDePagamento,
      }}
    >
      {children}
    </PagamentoContext.Provider>
  );
};




export const usePagamentoContext = () => {
  const { tipoPagamento, formaDePagamento, setFormaDePagamento } = useContext(PagamentoContext);
    
    function mudarFormaPagamento(id){
        const formaSelecionada = tipoPagamento.find(pagamento => pagamento.id === id);
        setFormaDePagamento(formaSelecionada)
    }

  return  {
    tipoPagamento, formaDePagamento, mudarFormaPagamento
  }
};
