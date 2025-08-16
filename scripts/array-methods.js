// métodos de array


// // pop
// // remove o último elemento

// numeros.pop();
// console.log(numeros);

// // push
// // adiciona elementos no fim do array
// numeros.push(50, 60, 70);
// console.log(numeros);

// const numeros = [-5, 0, 5, 10, 20, 30, 40];
// const numerosAcimaDeCinco = [];

// for(const numero of numeros){
//   if(numero > 5){
//     numerosAcimaDeCinco.push(numero);
//   };
// };

// console.log(numerosAcimaDeCinco);


// const filtrar = numeros.filter((valor) => {
  //   return valor % 2 === 1;
  // });
  
  // console.log(filtrar);

  
  // const somar = numeros.reduce((acumulador, valor) => {
    //   return acumulador + valor;
    // });
    
    // console.log(somar)
    
    
    // spread operator
    // const novosNumeros = [...numeros, 50, 60];

// console.log(novosNumeros)

// const pessoa = {
  //   nome: "Alex",
  //   idade: 29,
  //   profissao: "professor"
  // };
  
// const novaFuncionalidade = {
  //   ...pessoa,
  //   altura: 1.85
  // }
  
  // console.log(novaFuncionalidade)
  

// const numeros = [10, 15, 20, 25, 30, 35, 40];

// // rest operator
// const [a, b, c, ...resto] = numeros;

// console.log(resto)