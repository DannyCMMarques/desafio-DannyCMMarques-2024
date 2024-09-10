import { padronizarStrings } from "./../utils/removerAcento.js";
import { animaisValidos } from "./../datas/animais.js";

export const casoInvalido = (animal) => {
  const animalPadronizado = padronizarStrings(animal);
  const filtrarAnimais = animaisValidos.filter((item) => {
    const especiePadronizada = padronizarStrings(item.especie.trim());
    return especiePadronizada === animalPadronizado.trim();
  });
  if (filtrarAnimais.length === 0) return { erro: "Animal inválido" };
  return true;
};
