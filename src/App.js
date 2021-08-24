import { useState } from 'react';
import './App.css';

import CostumerForm from './components/CostumerForm';
import CostumerList from './components/CostumerList';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  const [contactObjects, setContactObjects] = useState([
    {
      id: 1,
      name: 'Pedro Yanez',
      email: 'pedro@email.com',
      number: 956479784,
      address: 'rua manoel dias , 40'

    },
    {
      id: 2,
      name: 'Jõao Paulo',
      email: 'jp@email.com',
      number: 956479547,
      address: 'rua manoel carlos , 80'

    },
    {
      id: 3,
      name: 'Pamela Ferraz',
      email: 'pamela@email.com',
      number: 956479587,
      address: 'rua do orfanato , 27'

    }
  ])

  
  const initialValue = {
    name: '',
    email: '',
    number: '',
    address: '',
  };

  const [values, setValues] = useState(initialValue);
  // const [actionName ] = useState('Adicionar')

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (values.id !== undefined) {
      handleEdit(values)          

      var foundIndex = contactObjects.findIndex(x => x.id === values.id);
      contactObjects[foundIndex] = values;
      setValues(initialValue)

    } else {
        handleAdd(values)
      }
  }

  //  ADD CONTACT METHOD
  const handleAdd = (values) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = { id, ...values}
    setContactObjects([...contactObjects, newContact])
    setValues(initialValue)
  }
  
  const handleEdit = (values) => {
    setValues({
      id: values.id,
      name: values.name,
      email: values.email,
      number: values.number,
      address: values.address,
      }
    )    
      
  
  }

   // DELETE CONTACT METHOD
  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete this contact?')) {
    
      setContactObjects(contactObjects.filter((contact) => contact.id !== id))
    }      
  }

  // HANDLE INPUT CHANGE METHOD
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

    



  return (
    <div className='App'>
      <div className='container shadow p-1 bg-white rounded'>
        <Header text='SCClients'/>
        <div className='row'>         
          <CostumerForm 
           handleSubmit={handleSubmit}
           handleInputChange={handleInputChange}
           values={values}
          />          
          <CostumerList onDelete={handleDelete}
           contactObjects={contactObjects}
            onEdit={handleEdit}/>
        </div>
      </div>
      
        <Footer />
      
    </div>
  );
}

export default App;
