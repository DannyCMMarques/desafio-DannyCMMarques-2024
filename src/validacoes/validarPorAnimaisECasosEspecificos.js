import { padronizarStrings } from "../utils/removerAcento.js";
import { animaisValidos } from "./../datas/animais.js";
import { espacoQuantidadeAdequados } from "./espacoQuantidadeAdequados.js";
import { casoInvalido } from "./casoInvalido.js";

export const validarPorAnimais = (animal, quantidade) => {
  const validandoExistenciaAnimal = casoInvalido(animal);

  if (validandoExistenciaAnimal.erro)
    return { erro: validandoExistenciaAnimal.erro };

  const biomasAdequados = espacoQuantidadeAdequados(animal, quantidade);

  if (biomasAdequados.erro) return { erro: biomasAdequados.erro };
  const animalPadronizado = padronizarStrings(animal);

  const biomaAnimalSelecionado = animaisValidos.find(
    (item) => item.especie === animalPadronizado
  )?.bioma;

  let biomasAdequadosPorEspecies = biomasAdequados.filter((item) =>
    item.bioma.some((bioma) => biomaAnimalSelecionado.includes(bioma))
  );

  const verificarSeCarnivoro = (comparacao) => {
    return animaisValidos.find((animal) => animal.especie === comparacao)
      .carnivoro;
  };

  const animaisExistBiomCarn = biomasAdequadosPorEspecies
    .filter((item) => item.animaisExistentes.animal !== undefined)
    .filter(
      (item) => verificarSeCarnivoro(item.animaisExistentes.animal) === true
    );

  if (verificarSeCarnivoro(animalPadronizado) !== true) {
    biomasAdequadosPorEspecies = biomasAdequadosPorEspecies.filter(
      (item) =>
        item.animaisExistentes.animal !==
        animaisExistBiomCarn
          .map((item) => item.animaisExistentes.animal)
          .join(",")
    );
  }

  if (
    animalPadronizado === "HIPOPOTAMO" &&
    biomasAdequadosPorEspecies.some((item) => item.animaisExistentes !== false)
  ) {
    biomasAdequadosPorEspecies = biomasAdequadosPorEspecies.filter(
      (item) =>
        item.animaisExistentes === false ||
        (item.bioma.includes("savana") && item.bioma.includes("rio"))
    );
  }

  if (animalPadronizado === "MACACO") {
    if (quantidade <= 1) {
      biomasAdequadosPorEspecies = biomasAdequadosPorEspecies.filter(
        (item) => item.animaisExistentes !== false
      );
    }
  }
  if (biomasAdequadosPorEspecies.length > 0) return biomasAdequadosPorEspecies;
};
