function Counter({
  contaAtual,
  maxContas
}) {

  return (

    <h3 className="text-2xl font-semibold">

      Ave-Marias:
      {" "}
      {contaAtual}/{maxContas}

    </h3>

  );

}

export default Counter;