import React from 'react';
import Contact from './Contact';
// import firebaseDb from '../firebase';

function CostumerList({ contactObjects, onDelete, onEdit }) {



  return (<>


    <div className='col-md-9  px-3 '>
      <div className='h4'>Listagem de clientes</div>

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
          {contactObjects.map((contact) => {
            return (
              <tr key={contact.id}>
                <Contact contact={contact} onDelete={onDelete} onEdit={onEdit} />
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
