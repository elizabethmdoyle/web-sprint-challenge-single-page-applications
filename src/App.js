import React, {useState} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form'
import schema from './validation/FormSchema';
import * as yup from 'yup';

const data = {
  name: '',
  email: '',
  phone: '',
  address: '',
  crust: '',
  size: '',
  sauce: '',
  cheese: '',
  extracheese: false,
  topping1: false,
  topping2: false,
  special: '',

}

const initialFormErrors = {
  name: '',
  email: '',
  phone: '',
  address: '',
  crust: '',
  size: '',
  sauce: '',
  cheese: '',
  extracheese: false,
  topping1: false,
  topping2: false,
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



- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order


*/

const App = () => {
//state

const [pizza, setPizza] = useState([]);
const [formValues, setFormValues] = useState(data);
const[formErrors, setFormErrors] = useState(initialFormErrors)

//axios


// axios.get(`https://reqres.in/api/`)
//     .then(res => setPizza(res.data, ...pizza))
//     .catch(err => console.error(err))

const submitForm = () => {
          axios.post(`https://reqres.in/api/orders`, formValues)
          .then(res => console.log(res.data)
          // setPizza(res.data)
          , ...pizza)
          .catch(err => console.error(err))
          .finally(() => setFormValues(data)) 
}



//event handlers

const validate = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => 
    setFormErrors({...formErrors, [name]: ""}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

}

const updateForm = (inputName, inputValue) => {
  validate(inputName, inputValue)
  setFormValues({...formValues, [inputName]: inputValue})
}

// const onSubmit = (evt) => {
//   setPizza([formValues, ...pizza])
//   evt.preventDefault()
// }


  return (
    
    <div className="appContainer">
      <section className="header">
        <p>Bloomtech Eats</p>
        <nav>
          <Link to="/" id="order-pizza">Home</Link>
          <Link to="/pizza" element={<Form />}>Order Now</Link>
        </nav>
          <Routes>
              <Route path="/"  />
              <Route path="/pizza" element={<Form value={formValues} submit={submitForm} update={updateForm}/>} />
          </Routes>
      </section>
      <section className="banner">
          <h1>Your Favorite food, delivered while coding</h1>
          <button>Order Now</button>
      </section>
      <section>
        <h3>Food Delivery in Gotham City</h3>
      </section>

      
      







      
    </div>
    
   
  )
  
}
export default App
