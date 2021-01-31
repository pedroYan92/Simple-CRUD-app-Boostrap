import React, { useEffect, useState } from 'react'

function CostumerForm(props) {

    const initialValue = {
        name: '',
        email: '',
        number: '',
        address: '',
      };
    
      var [values, setValues] = useState(initialValue);
    
      useEffect(() => {
        if (props.currentId === '')
          setValues({
            ...initialValue,
          });
        else
          setValues({
            ...props.contactObjects[props.currentId],
          });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.currentId, props.contactObjects]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEdit(values);
      };
    
      const handleInputChange = (e) => {
        var { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };  
      

    return (        
            <form className=' shadow p-3 mb-5 bg-white rounded' autoComplete='off' onSubmit={handleSubmit}>
                <div className='h3 mb-3'>{props.currentId === '' ? 'Adicionar Cliente' : 'Atualizar Cliente'}</div>

                <label  className="form-label ">Nome Completo</label>
                <input 
                type="text"
                className="form-control mb-3"
                placeholder="Nome Completo"
                name='name'
                value={values.name}
                onChange={handleInputChange}/>
                <label  className="form-label ">Email</label>
                <input
                type="email"
                className="form-control mb-3"
                placeholder="seuemail@email.com"
                name='email'
                value={values.email}
                onChange={handleInputChange}/>
                <label  className="form-label ">Contato</label>
                <input
                type="number"
                className="form-control mb-3"
                placeholder="Contato"
                name='number'
                value={values.number}
                onChange={handleInputChange}/>
                <label className="form-label ">Endereço</label>
                <textarea
                className="form-control mb-3"
                rows="3"
                name='address'
                value={values.address}
                onChange={handleInputChange} ></textarea>
                <button type="submit" className="btn btn-primary m-3">Enviar</button>
            </form>
            
           )
}

export default CostumerForm;
