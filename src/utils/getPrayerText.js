import { oracoes } from "../data/oracoes";
import { TIPOS_ORACAO } from "../constants/tiposOracao";

export function getPrayerText(tipoOracao) {

  if (tipoOracao === TIPOS_ORACAO.CREDO) {
    return oracoes.credo;
  }

  if (tipoOracao === TIPOS_ORACAO.PAI_NOSSO) {
    return oracoes.paiNosso;
  }

  if (tipoOracao === TIPOS_ORACAO.AVE_MARIA) {
    return oracoes.aveMaria;
  }

  if (tipoOracao === TIPOS_ORACAO.GLORIA) {
    return oracoes.gloria;
  }

  if (tipoOracao === TIPOS_ORACAO.FATIMA) {
    return oracoes.oracaoDeFatima;
  }

  if (tipoOracao === TIPOS_ORACAO.SALVE_RAINHA) {
    return oracoes.salveRainha;
  }

  if (tipoOracao === TIPOS_ORACAO.ORACAO_FINAL) {
    return oracoes.oracaoFinal;
  }

  return "";

}