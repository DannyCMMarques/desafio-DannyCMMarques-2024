import { validarPorAnimais } from "./validacoes/validarPorAnimaisECasosEspecificos.js";
class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const recintosDisponiveis = validarPorAnimais(animal, quantidade);
    let objRespostaRecintos = {};
    if (!recintosDisponiveis.erro) {
      objRespostaRecintos.recintosViaveis = recintosDisponiveis.map((item) => {
        return `Recinto ${item.id} (espaço livre: ${item.espacoLivre} total: ${item.tamanhoTotal})`;
      });
    } else {
      objRespostaRecintos.erro = recintosDisponiveis.erro;
    }
console.log(objRespostaRecintos)
    return objRespostaRecintos;
  }
}

export { RecintosZoo as RecintosZoo };
