import React from 'react'
import './Form.css'



const Form = (props) => {

    const {value, submit, update, errors} = props;

const onChange = (evt) => {
   const {name, value, checked, type} = evt.target;

   const valueToUse = type === "checkbox" ? checked : value

   update(name, valueToUse)
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()

    }

    return (
        
        <div id="order-pizza"> Build Your Own Pizza 
            <img src="../Assets/Pizza.jpg" alt="form-img"/>
            <div className="errors">
                    <p>{errors.name}</p>
                    <p>{errors.email}</p>
                    <p>{errors.phone}</p>
                    <p>{errors.address}</p>
                    <p>{errors.crust}</p>
                    <p>{errors.size}</p>
                    <p>{errors.sauce}</p>
                    <p>{errors.cheese}</p>
                    <p>{errors.extracheese}</p>
                    <p>{errors.sausage}</p>
                    <p>{errors.chicken}</p>
                    <p>{errors.beef}</p>
                    <p>{errors.bacon}</p>
                    <p>{errors.pork}</p>
                    <p>{errors.ham}</p>
                    <p>{errors.onions}</p>
                    <p>{errors.gp}</p>
                    <p>{errors.mushrooms}</p>
                    <p>{errors.olives}</p>
                    <p>{errors.tomatoes}</p>
                    <p>{errors.bp}</p>
                    <p>{errors.pineapples}</p>
                    <p>{errors.special}</p>
            </div>

            <form id="pizza-form" onSubmit={onSubmit}>
                <section>
                    <label> Name
                        <input 
                        id="name-input"
                        name="name"
                        type="text"
                        value={value.name}
                        onChange={onChange}
                        />
                    </label>
                    <label> Email
                        <input 
                        name="email"
                        type="text"
                        value={value.email}
                        onChange={onChange}
                        />
                    </label>
                    <label> Phone
                        <input 
                        name="phone"
                        type="text"
                        value={value.phone}
                        onChange={onChange}
                        />
                    </label>
                    <label> Address
                        <input 
                        name="address"
                        type="text"
                        value={value.address}
                        onChange={onChange}
                        />
                    </label>
                </section>
                <section>

                    <label> Size
                        <select id="size-dropdown" value={value.size} onChange={onChange} name="size">
                            <option name="size-input" >Select A Size</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra-large">Extra Large</option>
                            <option value="personal">Personal</option>
                        </select>
                    </label>
                    
                    <label> Would you like Extra Cheese?  
                        <input 
                        name="extracheese"
                        type="checkbox"
                        value={value.extracheese}
                        onChange={onChange}
                        checked={value.extracheese}

                        />
                    </label> 
                </section>
                  <section className="meat">
                    <p>Choose a Meat</p>
                    <label> Pepperoni
                        <input 
                        name="pepperoni"
                        type="checkbox"
                        value={value.pepperoni}
                        onChange={onChange}
                        checked={value.pepperoni}
                        />
                    </label>

                    <label> Sausage
                        <input 
                        name="sausage"
                        type="checkbox"
                        value={value.sausage}
                        onChange={onChange}
                        checked={value.sausage}

                        />
                    </label>

                    <label> Chicken
                        <input 
                        name="chicken"
                        type="checkbox"
                        value={value.chicken}
                        onChange={onChange}
                        checked={value.chicken}

                        />
                    </label>
                    
                    <label> Beef
                        <input 
                        name="beef"
                        type="checkbox"
                        value={value.beef}
                        onChange={onChange}
                        checked={value.beef}

                        />
                    </label>

                    <label> Bacon
                        <input 
                        name="bacon"
                        type="checkbox"
                        value={value.bacon}
                        onChange={onChange}
                        checked={value.bacon}

                        />
                    </label>
                    <label> Pork
                        <input 
                        name="pork"
                        type="checkbox"
                        value={value.pork}
                        onChange={onChange}
                        checked={value.pork}

                        />
                    </label>
                    <label> Ham
                        <input 
                        name="ham"
                        type="checkbox"
                        value={value.ham}
                        onChange={onChange}
                        checked={value.ham}

                        />
                    </label>
                               
                </section>
                <section>
                    <p>Choose Additional Toppings</p>
                    <label> Onions
                        <input 
                        name="onions"
                        type="checkbox"
                        value={value.onions}
                        onChange={onChange}
                        checked={value.onions}

                        />
                    </label>
                    <label> Green Peppers
                        <input 
                        name="gp"
                        type="checkbox"
                        value={value.gp}
                        onChange={onChange}
                        checked={value.gp}

                        />
                    </label>
                    <label> Mushrooms
                        <input 
                        name="mushrooms"
                        type="checkbox"
                        value={value.mushrooms}
                        onChange={onChange}
                        checked={value.mushrooms}

                        />
                    </label>
                    <label> Olives
                        <input 
                        name="olives"
                        type="checkbox"
                        value={value.olives}
                        onChange={onChange}
                        checked={value.olives}

                        />
                    </label>
                    <label> Tomatoes
                        <input 
                        name="tomatoes"
                        type="checkbox"
                        value={value.tomatoes}
                        onChange={onChange}
                        checked={value.tomatoes}

                        />
                    </label>
                    <label> Banana Peppers
                        <input 
                        name="bp"
                        type="checkbox"
                        value={value.bp}
                        onChange={onChange}
                        checked={value.bp}

                        />
                    </label>
                    <label> Pineapples
                        <input 
                        name="pineapples"
                        type="checkbox"
                        value={value.pineapples}
                        onChange={onChange}
                        checked={value.pineapples}

                        />
                    </label>

                </section>
                
                <label> Special Instructions
                    <input
                    id="special-text"
                    name="special"
                    type="textarea"
                    value={value.special}
                    onChange={onChange}
                    />     
                </label>

            <input id="order-button" type="submit" value="Add to Order" />
            </form>
        </div>
        
    )
}

export default Form