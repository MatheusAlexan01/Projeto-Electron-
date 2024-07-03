document.addEventListener('DOMContentLoaded',function(){
    let linkfechar = document.querySelector('#fechar-link')
    linkfechar.addEventListener('click',function(){
        window.api.send('fechar-janela-sobre')
    
    
    })
    })

    
 

function media (){


var escola = document.getElementById('escola').value;
var nome = document.getElementById('aluno').value;
var nota1 =Number(document.getElementById('nota1').value);
var nota2 =Number(document.getElementById('nota2').value);
var nota3 =Number(document.getElementById('nota3').value);

var soma = nota1+nota2+nota3;

var resultado = soma / 3;
var situacao = '';
if(resultado > 7){
situacao = 'aprovado'



}else{
situacao = 'reprovado'

}


 let diva1 = document.getElementById('resultado');
diva1.innerHTML = `O media do ${nome} foi ${resultado.toFixed(2)} e está ${situacao} 
*NOTA:Primeiro  Bismestre: ${nota1}
</br>
*NOTA:Segundo   Bismestre: ${nota2}

*NOTA:Terceiro  Bismestre: ${nota3}
Inistituação:${escola}

`

return `Boletim do aluno(a) ${nome} da instituição ${escola},

*NOTA:Primeiro  Bismestre: ${nota1}

*NOTA:Segundo   Bismestre: ${nota2}

*NOTA:Terceiro  Bismestre: ${nota3}

sua média  ${resultado.toFixed(2)} ,o aluno(a) está ${situacao}.`
}

document.getElementById('pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    

    const resultado = media();
    doc.text(resultado, 10, 10);
    doc.save('resultado.pdf');
})
