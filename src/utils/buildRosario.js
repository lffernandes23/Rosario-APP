import { misterios } from "../data/misterios";

export function buildRosario() {

  return [

    ...misterios.gozosos,

    ...misterios.luminosos,

    ...misterios.dolorosos,

    ...misterios.gloriosos

  ];

}