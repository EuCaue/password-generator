const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genUpperCase = () => String.fromCharCode(rand(65, 91));
const genLowerCase = () => String.fromCharCode(rand(97, 123));
const genNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$%*()_+-=/><?';
const genSymbols = () => symbols[rand(0, symbols.length)];

export default function genPassword(
  length,
  upperCase,
  lowerCase,
  numbers,
  symbols,
) {
  const passwordArray = [];
  length = Number(length);

  //? Se for true os parametros, ele gera, senão, pula para o próximo
  for (let i = 0; i < length; i++) {
    upperCase && passwordArray.push(genUpperCase());
    lowerCase && passwordArray.push(genLowerCase());
    numbers && passwordArray.push(genNumber());
    symbols && passwordArray.push(genSymbols());
  }

  console.log(genUpperCase());
  return passwordArray.join('').slice(0, length);
}
