import { padronizarStrings } from "./../utils/removerAcento.js";
import { animaisValidos } from "./../datas/animais.js";
import { recintosExistentes } from "../datas/recintosExistentes.js";

export const animaisCarnivoros = (animal) => {
  let recintosPermitidos = [];
  const animalPadronizado = padronizarStrings(animal);

  const verificarSeCarnivoro = animaisValidos.find(
    (animal) => animal.especie === animalPadronizado
  ).carnivoro;
  if (verificarSeCarnivoro) {
    recintosPermitidos = recintosExistentes.filter(
      (item) =>
        item.animaisExistentes.animal === animalPadronizado ||
        item.animaisExistentes === false
    );
    return recintosPermitidos;
  } else {
    recintosPermitidos = recintosExistentes;
    return recintosPermitidos;
  }
};
