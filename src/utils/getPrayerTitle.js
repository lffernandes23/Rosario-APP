import { TIPOS_ORACAO } from "../constants/tiposOracao";

export function getPrayerTitle(tipoOracao) {

  if (tipoOracao === TIPOS_ORACAO.CREDO)
    return "Credo";

  if (tipoOracao === TIPOS_ORACAO.PAI_NOSSO)
    return "Pai Nosso";

  if (tipoOracao === TIPOS_ORACAO.AVE_MARIA)
    return "Ave Maria";

  if (tipoOracao === TIPOS_ORACAO.GLORIA)
    return "Glória ao Pai";

  if (tipoOracao === TIPOS_ORACAO.FATIMA)
    return "Oração de Fátima";

  if (tipoOracao === TIPOS_ORACAO.SALVE_RAINHA)
    return "Salve Rainha";

  if (tipoOracao === TIPOS_ORACAO.ORACAO_FINAL)
    return "Oração Final";

  return "";
}