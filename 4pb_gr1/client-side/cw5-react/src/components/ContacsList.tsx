import  { useState } from 'react'
import { Contact, contacts, lastId } from '../data/contacts'

type Props = {}

function ContacsList({}: Props) {
   //stan komponentu - lista kontaktów
   const [contactsList, setContactsList] = useState<Contact[]>(contacts)
   const [name, setName] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [phone, setPhone] = useState<string>('')
 
   function handleDelete(id: number) {
     console.log('handleDelete', id);
     setContactsList(contactsList.filter(c => c.id !== id))
   }
   const addContact = () => {
     if (name === '' || email === '' || phone === '') {     
       return;
     }
     const newContact: Contact = {
       id: lastId(contactsList) + 1,
       name: name,
       email: email,
       phone: phone
     };
     setContactsList([...contactsList, newContact]);
     setName('');
     setEmail('');
     setPhone('');
   }
   return (
     <div className='container'>
       <h1>Lista kontaktów ilość: {contactsList.length}</h1>
       <div>
         <div className='row m-2'>
           <label className='col-3 text-end' >Podaj nazwę: </label>
           <input
             onChange={(e) => setName(e.target.value)}
             value={name}
             type="text" className='col-3' />{name}
         </div>
         <div className='row m-2'>
           <label className='col-3 text-end' >Podaj email: </label>
           <input type="email" className='col-3'
             onChange={(e) => setEmail(e.target.value)}
             value={email} />{email}
         </div>
         <div className='row m-2'>
           <label className='col-3 text-end'
 
           >Podaj telefon: </label>
           <input type="tel" className='col-3'
             onChange={(e) => setPhone(e.target.value)}
             value={phone} />{phone}
         </div>
         <div className='row m-2'>
           <input type="button"
             onClick={() => { addContact() }}
             className='btn btn-primary offset-3 col-3'
             value="Dodaj kontakt" />
         </div>
 
       </div>
       {contactsList.map((c, i) => (
         <div className='contact border border-black m-2 p-2' key={c.id}>
           <h2>{c.name}</h2>
           <p>Email: {c.email}</p>
           <p>Telefon: {c.phone}</p>
           <div className='text-end' >
             <input type="button"
               className='btn btn-danger'
               onClick={() => { handleDelete(c.id) }}
               value="usuń" />
           </div>
         </div>
       ))}
     </div>
   )
}

export default ContacsList