import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCostumer } from '../redux/costumerSlice';

function CostumerForm({ handleSubmit, actionName }) {
  const [values, setValues] = useState('');
  const dispatch = useDispatch();


  //  ADD CONTACT METHOD
  const handleAdd = (event) => {
    event.preventDefault();
    if (values) {
      dispatch(
        addCostumer({
          name: values.name,
          email: values.email,
          number: values.address,
          address: values.address,
        })
      );
    }
  };

  // HANDLE INPUT CHANGE METHOD
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };




  return (
    <form className='col-md-3 px-3 ' autoComplete='off' onSubmit={handleAdd}>
      {/* <div className='h4 mb-3'>{currentId === '' ? 'Adicionar Cliente' : 'Atualizar Cliente'}</div> */}
      <div className='h4'>{values.id ? 'Editar' : 'Adicionar'}</div>
      <label className="form-label ">Nome Completo</label>
      <input
        required
        type="text"
        className="form-control mb-2"
        placeholder="Nome Completo"
        name='name'
        value={values.name}
        onChange={handleInputChange} />
      <label className="form-label ">Email</label>
      <input
        required
        type="email"
        className="form-control mb-2"
        placeholder="seuemail@email.com"
        name='email'
        value={values.email}
        onChange={handleInputChange} />
      <label className="form-label ">Contato</label>
      <input
        required
        type="number"
        className="form-control mb-2"
        placeholder="Contato"
        name='number'
        value={values.number}
        onChange={handleInputChange} />
      <label className="form-label ">Endereço</label>
      <textarea
        required
        className="form-control"
        rows="3"
        name='address'
        value={values.address}
        onChange={handleInputChange} ></textarea>
      <button type="submit" className="btn btn-primary m-3">Enviar</button>
    </form>

  )
}

export default CostumerForm;
