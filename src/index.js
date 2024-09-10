import { RecintosZoo } from "./recintos-zoo.js";
import readline from "readline";

const readlineEntradaPrograma = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const iniciarPrograma = () => {
  readlineEntradaPrograma.question("Digite o nome do animal: ", (animal) => {
    readlineEntradaPrograma.question(
      "Digite a quantidade de animais: ",
      (quantidade) => {
        new RecintosZoo().analisaRecintos(animal, parseInt(quantidade));
        readlineEntradaPrograma.close();
      }
    );
  });
};

iniciarPrograma();
