import { animaisCarnivoros } from "./animaisCarnivoros.js";
import { animaisValidos } from "./../datas/animais.js";
import { padronizarStrings } from "./../utils/removerAcento.js";
import { casoInvalido } from "./casoInvalido.js";

export const espacoQuantidadeAdequados = (animal, quantidade) => {
  const validandoExistenciaAnimal = casoInvalido(animal);
  const erroRecinto = "Não há recinto viável";
  const animalPadronizado = padronizarStrings(animal);
  const recintoPermitidos = animaisCarnivoros(animal);

  const tamanhoTotalAnimal =
    animaisValidos.find((animais) => animais.especie === animalPadronizado)
      .tamanho * quantidade;

  if (quantidade <= 0 || isNaN(tamanhoTotalAnimal)) {
    return { erro: "Quantidade inválida" };
  } else {
    const recintosTamanhosAdequados = recintoPermitidos
      .filter((item) => {
        if (item.animaisExistentes === false) {
          return item.tamanhoTotal >= tamanhoTotalAnimal;
        } else {
          if (item.animaisExistentes.animal === animalPadronizado) {
            return (
              item.tamanhoTotal -
                animaisValidos.find(
                  (animais) => animais.especie === item.animaisExistentes.animal
                ).tamanho *
                  item.animaisExistentes.quantidade >=
              tamanhoTotalAnimal
            );
          } else {
            return (
              item.tamanhoTotal -
                (animaisValidos.find(
                  (animais) => animais.especie === item.animaisExistentes.animal
                ).tamanho *
                  item.animaisExistentes.quantidade +
                  1) >=
              tamanhoTotalAnimal
            );
          }
        }
      })
      .map((item) => {
        let espacoLivre = 0;
        if (item.animaisExistentes === false) {
          espacoLivre = item.tamanhoTotal - tamanhoTotalAnimal;
        } else {
          if (item.animaisExistentes.animal === animalPadronizado) {
            espacoLivre =
              item.tamanhoTotal -
              animaisValidos.find(
                (animais) => animais.especie === item.animaisExistentes.animal
              ).tamanho *
                item.animaisExistentes.quantidade -
              tamanhoTotalAnimal;
          } else {
            espacoLivre =
              item.tamanhoTotal -
              (animaisValidos.find(
                (animais) => animais.especie === item.animaisExistentes.animal
              ).tamanho *
                item.animaisExistentes.quantidade +
                1) -
              tamanhoTotalAnimal;
          }
        }
        return {
          ...item,
          espacoLivre: espacoLivre,
        };
      });

    if (recintosTamanhosAdequados.length > 0) return recintosTamanhosAdequados;
    else return { erro: erroRecinto };
  }
};
