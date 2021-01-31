import './App.css';

import CostumerList from './components/CostumerList';
import Footer from './components/Footer';

function App(props) {
  const { deleteCostumer } = props;
  return (
    <div className='App mt-5'>
      <div className='container-xxl mx-5 shadow p-3 mb-5 bg-white rounded'>
        <div className='h2 mb-5'>Sistema de Cadastro</div>
        <div className='row'>
          <CostumerList deleteCostumer={deleteCostumer} />
        </div>
      </div>
      <div className='container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
