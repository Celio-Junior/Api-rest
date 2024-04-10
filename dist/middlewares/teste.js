"use strict";const cpf = "1".repeat(11);
const cpf_limpo = cpf.replace(/\D/g, "");

if (typeof cpf_limpo !== "string") return;
if (cpf_limpo.length !== 11) return;
if(cpf_limpo.charAt(0).repeat(11) === cpf_limpo) return

const cpf_parcial = cpf_limpo.slice(0, 9);
const digito_1 = createDigit(cpf_parcial);
const digito_2 = createDigit(cpf_parcial + digito_1);

const cpf_new = cpf_parcial + digito_1 + digito_2;
const validar = cpf_new === cpf_limpo? "cpf valido" : "cpf inválido";

console.log(validar);

function createDigit(cpf_parcial){
  let regress = cpf_parcial.length + 1;
  let total = 0;
  for(const digit of cpf_parcial){
    total += +digit * regress;
    regress--;
  }
  total = 11 - (total % 11);
  return total > 9? "0": String(total);
}
