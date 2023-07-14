import React {useState} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form'

const data = {
  name: '',
  size: '',
  topping1: true,
  topping2: true,
  special: '',
}


/* 
- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [ ] A order form that has a "/pizza" route and shows the form
- [ ] A form with an id of "pizza-form"
- [ ] A name text input field with an id of "name-input"
- [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
- [ ] A dropdown for pizza size with an id of "size-dropdown"
- [ ] A checklist for toppings - at least 4 (hint: name each separately!)
- [ ] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits the form and returns a database record of name, size, toppings and special instructions

*/

const App = () => {
//state

const [pizza, setPizza] = useState(data);
const [formValues, setFormValues] = useState();

//axios

axios.get(`fakeapi.com`)
    .then(res => setPizza(res.data))
    .catch(err => console.err(err))

//event handlers (onSubmit)


const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const onSubmit = (evt) => {
  setPizza([formValues, ...pizza])
  evt.preventDefault()
}


  return (
    
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    <Routes>
      <Route path="/"  />
      <Route path="/order" element={<Form submit={onSubmit}/>} />
   </Routes>
      
    </div>
    
   
  )
  
}
export default App
