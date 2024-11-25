const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
      ],
    };

    //FUNCIONALIDADES DE CAIXA ELETRÔNICO

    // O cliente deve primeiro inserir no prompt o número da funcionalidade desejada,
    // sendo 1 para saldo, 2 para depósito ou 3 para saque.

    //criando caixa de seleção
    //let serviceArr = [1,2,3];
    let serviceChoice = parseInt(prompt(" Selecione a opção desejada:\n 1)Função Saldo\n 2)Função Depósito\n 3)Função Saque"));
    
    if (serviceChoice ==1){
    //1) função saldo

let responseBalance = prompt(" Digite 1 para saldo da poupança\n Digite 2 para saldo em crédito");
    function getBalance(user, responseBalance){

        
        let balance =0;
        if (responseBalance ==1 ){
            balance = user.savingsBalance;
            alert(`saldo em poupança: ${balance}`);
        } else if (responseBalance ==2) {
            balance = user.cardsInformation[0].creditBalance;
            alert(`saldo em crédito: ${balance}`);
        } else{
            alert("Opção inválida. Digite Novamente.");
        }

    }
getBalance(user, responseBalance);
    }

    else if (serviceChoice ==2){
        
// 2) FUNÇÃO DEPÓSITO

let valor = parseFloat(prompt(" Informe o valor a ser depsitado\n Mínimo de 5 e máximo de 500"));

 function makeDeposit(user, valor){
       
//validação do valor de depósito

    if (typeof valor == "string"){
        return alert("Erro. Por favor digite um valor inteiro entre 5 e 500");
    }
    else if ( (valor % 1 !== 0)|| (valor < 0)){
        return alert("Erro. Erro. Por favor digite um valor inteiro entre 5 e 500");
    }
    else if ((valor < 5) || (valor > 500)){
        return alert("Erro. Por favor digite um valor inteiro entre 5 e 500");
    }
    else{
        user.savingsBalance += valor;
        return alert(` Depósito realizado com sucesso!\n Saldo atual: ${user.savingsBalance}`)
    }
}
    makeDeposit(user,valor);
    }
    else if (serviceChoice ==3){
    
//3) FUNÇÃO SAQUE

let valorSaque = parseFloat(prompt("Informe o valor que deseja sacar: "));
let tipoConta = parseInt(prompt(" Informe o tipo de conta de onde deseja efetuar o saque\n 1 para conta poupança\n 2 para crédito bancário"));

function makeWithdrawal (user, valorSaque, tipoConta){
// validação de valor de saque

    if (typeof valorSaque == "string"){
        return alert("Erro. Por favor digite um valor inteiro entre 5 e 500");
    }
    else if ( (valorSaque % 1 !== 0)|| (valorSaque < 0)){
        return alert("Erro. Erro. Por favor digite um valor inteiro entre 5 e 500");
    }
    else if (valorSaque < 5){
        return alert("Erro. Por favor digite um valor inteiro maior que 5");
    }

// selecão do tipo de conta que será feito o saque
    
    if ((tipoConta != 1) && (tipoConta != 2)){
        return alert("Tipo de conta errado. Por favor tente novamente");
    }

    if ((tipoConta == 1) && (user.savingsBalance >= valorSaque)){
        user.savingsBalance -= valorSaque;
         alert ("Saque realizado com sucesso");
         return alert(`saldo poupança: ${user.savingsBalance} saldo em crédito: ${user.cardsInformation[0].creditBalance}`);
    }
    
    else if ((tipoConta ==2) && (user.cardsInformation[0].creditBalance >= valorSaque)){
        user.cardsInformation[0].creditBalance -= valorSaque;
         alert ("Saque realizado com sucesso");
         return alert(`saldo poupança: ${user.savingsBalance} saldo em crédito: ${user.cardsInformation[0].creditBalance}`);

    }
    
    else if ((tipoConta == 1) && (user.savingsBalance < valorSaque)){
        return alert ("Saldo insuficiente");
    }

    else if ((tipoConta == 2) && (user.cardsInformation[0].creditBalance < valorSaque)){
        return alert ("Saldo insuficiente");
    }

   
}

makeWithdrawal(user, valorSaque, tipoConta);
    }
    else{
        alert("por favor digite uma opção válida");
    }