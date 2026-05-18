export function getMysteriesByDay() {

  const diaSemana = new Date().getDay();

  switch (diaSemana) {

    case 1:
    case 6:
      return "gozosos";

    case 2:
    case 5:
      return "dolorosos";

    case 3:
    case 0:
      return "gloriosos";

    case 4:
      return "luminosos";

    default:
      return "gozosos";
  }

}