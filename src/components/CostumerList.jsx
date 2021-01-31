import React, { useEffect, useState } from 'react';
import firebaseDb from '../firebase';
import CostumerForm from './CostumerForm';

function CostumerList() {
  const [contactObjects, setContactObjects] = useState({});
  const [currentId, setCurrentId] = useState('');
  

  useEffect(() => {
    firebaseDb.child('costumers').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
      else setContactObjects({});
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === '')
      firebaseDb.child('costumers').push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId('');
      });
    else
      firebaseDb.child(`costumers/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId('');
      });
  };

  const onDelete = (key) => {
    if (window.confirm('Are ypu sure to delete this costumer?')) {
      firebaseDb.child(`costumers/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId('');
      });
    }
    }

    




    return (<>
      <div className='col-3'>
      <CostumerForm {...{ addOrEdit, currentId, contactObjects }}/>
      </div>
      
        <div className='col-9 shadow p-3 mb-5 bg-white rounded'>
          <div className='h3'>Listagem de clientes</div>
          
          <table className='table table-striped table-hover'>
            <thead>
              <tr>                
                <th scope='col'>Nome Completo</th>
                <th scope='col'>Email</th>
                <th scope='col'>Contato</th>
                <th scope='col'>Endereço</th>
                <th scope='col'>Ações</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
               
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].name}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>{contactObjects[id].number}</td>
                    <td>{contactObjects[id].address}</td>                    
                    <td>
                      <button className='btn btn-success mr-3' onClick={() => setCurrentId(id)}>Editar</button>
                      <button className='btn btn-danger' onClick={() => onDelete(id)}>Deletar</button>
                    </td>
                  </tr>
                );
              })
              }
            </tbody>
            
          </table>
          
        </div>
      
      </>
    );
  };


export default CostumerList;
