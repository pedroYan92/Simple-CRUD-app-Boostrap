import React from 'react'
// import Button from './Button'

export default function Contact({ contact, onDelete, onEdit }) {
    // console.log(contact);
    return (
        <>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.number}</td>
            <td>{contact.address}</td>
            <td>
                <button className='btn btn-success me-1' onClick={() => onEdit(contact)}>Editar </button>
                <button className='btn btn-danger' onClick={() => onDelete(contact.id)}>Deletar</button>
            </td>
        </>
    )
}
