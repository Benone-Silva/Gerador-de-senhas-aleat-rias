class Password{
    #CARACTER_ESPECIAL = '!@#$%¨&*(_-)=+§´`[{]}?;:.<>';
    #LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz";
    #LETTERS_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return_password(tamanho){
      let result = ''
      const value = (Math.floor(Math.random() * (9 * (10 ** (tamanho - 1)))) + (10 ** (tamanho - 1))).toString();
      console.log(value);

      for(let i = 0; i < value.length; i++){
        const index = value[i];
        const randomCharType = Math.floor(Math.random() * 4);
 
        if(randomCharType === 0){
            result += this.#CARACTER_ESPECIAL[index % this.#CARACTER_ESPECIAL.length];
        }else if(randomCharType === 1){
            result += this.#LETTERS_LOWER[index % this.#LETTERS_LOWER.length];
        }else if(randomCharType == 2){
            result += this.#LETTERS_UPPER[index % this.#LETTERS_UPPER.length];
        }else{
            result += Math.floor(Math.random() * 9) + 1;
        }
 
    } 
      return result;
    }
  
}

  function ObterValores(){
    const checkboxes = document.getElementsByName('options');
    const campo_tamanho = document.getElementById('campo').value
    var result = document.getElementById('pass');
    const values = [];
    const pass = new Password();
    

     Array.from(checkboxes).forEach((checkbox) =>{
        if(checkbox.checked){
            if(checkbox.value == 'numbers' || checkbox.value == 'letters' || checkbox.value == 'special'){
                values.push(checkbox.value);
            }
        }
     });
    
     var mensagem = `${pass.return_password(campo_tamanho)}`; 
     console.log("Valores marcados:", values);
     console.log('Tamanho:', campo_tamanho);
     result.value = mensagem; 
} 
