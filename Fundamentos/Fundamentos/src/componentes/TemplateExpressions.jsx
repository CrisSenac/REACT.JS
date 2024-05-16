const TemplateExpressions = () => {

//4 - Criando uma variavel
const nome = "Ana Cunha"

// 5 - Objeto
const dados = {
  idade: 34,
  profissão: "Professora"
}

  return (
    <div>
    <p>A soma é {4 + 9}</p>
    <h3>Boas-Vindas {nome} </h3>
    <p>Vi aqui que você tem {dados.idade} anos e é {dados.profissão}</p>
    </div>
    )
}

export default TemplateExpressions;