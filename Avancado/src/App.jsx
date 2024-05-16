import './App.css';

// 10 - Importando imagem do Assets
import Ibirapuera from "./assets/Ibirapuera.jpg";

//11 - Importando Hooks - useState
import Dados from './componentes/Dados';

function App() {


  return (
    <div className="AppAvancado">
      <h1>Próximos passos React JS</h1>

      {/* 9- Inserindo imagem do public */}
      <img src="/SP.jpg" alt="Imagem de cima, São Paulo" />

    {/*Importando imagem do assets*/}
    <img src={Ibirapuera} alt="Foto do Parque Ibirapuera" />

    {/* importanto Hooks */}
    <Dados />
    </div>
  )
}

export default App;

