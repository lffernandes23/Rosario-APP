import { TIPOS_ORACAO } from "../constants/tiposOracao";

export function vibrateByPrayer(tipoOracao) {

  if (!("vibrate" in navigator)) {
    return;
  }

  switch (tipoOracao) {

    case TIPOS_ORACAO.AVE_MARIA:
      navigator.vibrate(30);
      break;

    case TIPOS_ORACAO.PAI_NOSSO:
      navigator.vibrate([40, 20, 40]);
      break;

    case TIPOS_ORACAO.GLORIA:
      navigator.vibrate([20, 20, 20]);
      break;

    default:
      navigator.vibrate(50);

  }

}