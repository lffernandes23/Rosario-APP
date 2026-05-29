import { TIPOS_ORACAO } from "../constants/tiposOracao";

export function advanceTerco(estado) {

  const {
    tipoOracao,
    faseInicial,
    contaAtual,
    misterioAtual
  } = estado;

  if (tipoOracao === TIPOS_ORACAO.CREDO) {

    return {
      ...estado,
      tipoOracao: TIPOS_ORACAO.PAI_NOSSO
    };

  }

  if (tipoOracao === TIPOS_ORACAO.PAI_NOSSO) {

    return {
      ...estado,
      tipoOracao: TIPOS_ORACAO.AVE_MARIA
    };

  }

  if (tipoOracao === TIPOS_ORACAO.AVE_MARIA) {

    if (
      faseInicial
        ? contaAtual < 3
        : contaAtual < 10
    ) {

      return {
        ...estado,
        contaAtual: contaAtual + 1
      };

    }

    return {
      ...estado,
      tipoOracao: TIPOS_ORACAO.GLORIA
    };

  }

  if (tipoOracao === TIPOS_ORACAO.GLORIA) {

    return {
      ...estado,
      tipoOracao: TIPOS_ORACAO.FATIMA
    };

  }

  if (tipoOracao === TIPOS_ORACAO.FATIMA) {

    if (faseInicial) {

      return {
        ...estado,
        faseInicial: false,
        contaAtual: 1,
        tipoOracao: TIPOS_ORACAO.PAI_NOSSO
      };

    }

    if (misterioAtual < 4) {

      return {
        ...estado,
        misterioAtual: misterioAtual + 1,
        contaAtual: 1,
        tipoOracao: TIPOS_ORACAO.PAI_NOSSO
      };

    }

    return {
      ...estado,
      tipoOracao: TIPOS_ORACAO.SALVE_RAINHA
    };

  }

  if (tipoOracao === TIPOS_ORACAO.SALVE_RAINHA) {

    return {
      ...estado,
      tipoOracao: TIPOS_ORACAO.ORACAO_FINAL
    };

  }

  if (tipoOracao === TIPOS_ORACAO.ORACAO_FINAL) {

    return {
      ...estado,
      finalizado: true
    };

  }

  return estado;

}