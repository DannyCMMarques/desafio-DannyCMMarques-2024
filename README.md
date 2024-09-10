# 🦁 Recintos do Zoo - Desafio Start DB

Este projeto faz parte do **Desafio Start DB**, onde você deve criar uma lógica para alocar animais em recintos adequados no zoológico. Abaixo, estão as instruções para rodar o projeto e interagir com o sistema.

## 🚀 Como Rodar o Projeto:

1. Instale as dependências do projeto com o seguinte comando:

```javascript
npm install
```
2-Para iniciar o programa, execute o seguinte comando no terminal:

```javascript
node index.js
```
Isso iniciará o programa e você verá um prompt para inserir informações

## 🧑‍💻 Interaja com o Sistema

* Digite o **nome do animal** e pressione **Enter**.
* Digite a **quantidade de animais** e pressione **Enter**.

O sistema analisará os recintos e exibirá os resultados no terminal.

   ![image](https://github.com/user-attachments/assets/d6b75894-52b3-44e3-bd94-371f9e3eb2b3)

## 📋 O Desafio Start DB
 Você pode ver mais sobre o desafio nesse link :
🔗[Link para o Desafio Start DB](https://dev.azure.com/db-tecnologia/_git/StartDB2024)

### 📊 Recintos Existentes

 O zoológico possui os seguintes recintos disponíveis.

  | número    | bioma             | tamanho total |  animais existentes |
  |-----------|-------------------|---------------|---------------------|
  | 1         | savana            |   10          |   3 macacos         |
  | 2         | floresta          |    5          |   vazio             |
  | 3         | savana e rio      |    7          |  1 gazela           |
  | 4         | rio               |    8          |   vazio             |
  | 5         | savana            |    9          |  1 leão             |

### 🦓 Animais

 O zoológico só está habilitado a tratar dos animais abaixo.
 A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

  | espécie    | tamanho | bioma                |
  |------------|---------|----------------------|
  | LEAO       |   3     |  savana              |
  | LEOPARDO   |   2     |  savana              |
  | CROCODILO  |   3     |  rio                 |
  | MACACO     |   1     |  savana ou floresta  |
  | GAZELA     |   2     |  savana              |
  | HIPOPOTAMO |   4     |  savana ou rio       |

### ⚖️ REGRAS PARA ENCONTRAR UM RECINTO

1) Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
2) Animais carnívoros devem habitar somente com a própria espécie
3) Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
4) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
5) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
6) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
7) Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!).
Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.

### 🖥️ ENTRADAS E SAÍDAS

1) O programa deve receber tipo e quantidade de animal (nessa ordem)
2) O programa deve retornar uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
3) A lista de recintos viáveis deve indicar o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: valorlivre total: valortotal)"
4) Caso animal informado seja inválido, apresentar erro "Animal inválido"
5) Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
6) Caso não haja recinto possível, apresentar erro "Não há recinto viável"


## 🧪VALIDANDO A SOLUÇÃO

Você pode rodar os testes com o seguinte comando:
```bash
npm test
```
![image](https://github.com/user-attachments/assets/71055a17-0e29-4446-b772-8a48143309d8)

## 🎯 Minha Experiência

Desenvolver este projeto foi uma experiência incrível! Pude aplicar diversas técnicas e lógicas de programação para solucionar o problema proposto. Estou muito animado para chance de participar do time da DB!
  


