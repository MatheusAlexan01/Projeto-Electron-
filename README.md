Documentação 

Descrição Geral (Objetivo):
Este código implementa uma aplicação web que calcula a média de três notas de um aluno e determina se ele está aprovado ou reprovado com base nessa média. Além disso, a aplicação permite gerar um arquivo PDF com os resultados das notas e a situação do aluno, assim formando um boletim escolar.

Funcionalidades:
1.	Calcular a Média:
•	O usuário pode inserir as notas de três bimestres para um aluno.
•	A média dessas notas é calculada e exibida junto com a situação do aluno (aprovado ou reprovado).
2.	Gerar PDF:
•	O usuário pode gerar um PDF com os detalhes das notas e a média calculada.
•	Nesse PDF tem informações como nome da escola, nome do aluno e as notas dos três bimestre 
3.	Fechar Janela:
•	Um link para fechar a janela está disponível, mas depende de uma integração com a API para funcionar.

Estrutura HTML:

1.	Campos de Entrada:
•	Um campo select para escolher a escola.
•	Um campo input para inserir o nome do aluno.
•	Três campos input para inserir as notas dos três bimestres.
2.	Botões:
•	Um botão para calcular a média.
•	Um botão para gerar um arquivo PDF com o resultado do boletim.

3.	Div resultado:

•	Uma div onde o resultado do cálculo da média é exibido.

Como Utilizar:
1.	Inserindo os dados do aluno:

•	Colando o nome da instituição, nome do aluno, as notas dos seus bimestres.

2.	Calculando a média:

•	Clicando no botão “Média”.
•	O resultado aparecerá em baixo mostrando as informações adquiridas select e nos inputs.

3.	Gerando PDF:

•	Clicando no botão “Gerar PDF”
•	Um arquivo será baixado no seu computador com o nome resultado contendo nele todas as informações fornecidas. 

Observações:
•	A nota mínima e máxima para cada bimestre é de 1 e 10, respectivamente.
•	O aluno é considerado aprovado se a média final for igual ou superior a 7.
•	O código utiliza a biblioteca jsPDF para gerar o boletim em PDF. Certifique-se de que esta biblioteca esteja incluída no seu projeto.
