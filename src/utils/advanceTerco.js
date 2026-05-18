import { TIPOS_ORACAO } from "../constants/tiposOracao";

export function advanceTerco({
  tipoOracao,
  faseInicial,
  contaAtual,
  misterioAtual,
  setTipoOracao,
  setContaAtual,
  setMisterioAtual,
  setFaseInicial,
  setFinalizado
}) {

  if (tipoOracao === TIPOS_ORACAO.CREDO) {

    setTipoOracao(TIPOS_ORACAO.PAI_NOSSO);

    return;

  }

  if (tipoOracao === TIPOS_ORACAO.PAI_NOSSO) {

    setTipoOracao(TIPOS_ORACAO.AVE_MARIA);

    return;

  }

  if (tipoOracao === TIPOS_ORACAO.AVE_MARIA) {

    const limite =
      faseInicial ? 3 : 10;

    if (contaAtual < limite) {

      setContaAtual(contaAtual + 1);

    } else {

      setTipoOracao(TIPOS_ORACAO.GLORIA);

    }

    return;

  }

  if (tipoOracao === TIPOS_ORACAO.GLORIA) {

    setTipoOracao(TIPOS_ORACAO.FATIMA);

    return;

  }

  if (tipoOracao === TIPOS_ORACAO.FATIMA) {

    if (faseInicial) {

      setFaseInicial(false);

      setContaAtual(1);

      setTipoOracao(TIPOS_ORACAO.PAI_NOSSO);

      return;

    }

    if (misterioAtual < 4) {

      setMisterioAtual(misterioAtual + 1);

      setContaAtual(1);

      setTipoOracao(TIPOS_ORACAO.PAI_NOSSO);

      return;

    }

    setTipoOracao(TIPOS_ORACAO.SALVE_RAINHA);

    return;

  }

  if (tipoOracao === TIPOS_ORACAO.SALVE_RAINHA) {

    setTipoOracao(TIPOS_ORACAO.ORACAO_FINAL);

    return;

  }

  if (tipoOracao === TIPOS_ORACAO.ORACAO_FINAL) {

    setFinalizado(true);

  }

}