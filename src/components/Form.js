import React from 'react'
import './Form.css'


const Form = (props) => {

    const {value, submit, update} = props;

const onChange = (evt) => {
   const {name, value} = evt.target;
   update(name, value)
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
    }

    return (
        
        <div id="order-pizza"> Order Your Pizza 
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

                <label> Sauce
                    <select id="sauce" value={value.sauce} name="sauce-input">
                        <option name="sauce" >Select A Sauce</option>
                        <option value="classic">Classic</option>
                        <option value="marinara">Marinara</option>
                        <option value="alfredo">Alfredo</option>
                        <option value="buffalo">Buffalo</option>
                        <option value="barbeque">Barbeque</option>
                    </select>
                </label>
                <label> Crust
                    <select id="crust-dropdown" value={value.crust} name="crust-input">
                        <option name="crust" >Select A Crust</option>
                        <option value="buttery">Butter</option>
                        <option value="garlic">Garlic</option>
                        <option value="sesame">Sesame</option>
                        <option value="cheese">Cheese</option>
                    </select>
                </label>
                
                <label> Size
                    <select id="size-dropdown" value={value.size} name="size-input">
                        <option name="size" >Select A Size</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                        <option value="personal">Personal</option>
                    </select>
                </label>
                <label> Cheese
                    <select id="cheese-dropdown" value={value.cheese} name="cheese-input">
                        <option name="cheese" >Select A Cheese</option>
                        <option value="Mozzerella">Mozzerella</option>
                        <option value="Feta">Feta</option>
                        <option value="parm">Parmesean</option>
                        <option value="Provolone">Provolone</option>
                        <option value="Specialty Cheese Blend">Specialty Cheese Blend</option>
                    </select>
                </label>
                <label> Would you like Extra Cheese?  
                    <input 
                    name="extracheese"
                    type="checkbox"
                    value={value.extracheese}
                    onChange={onChange}
                    />
                </label> 
                </section>

                <section>
                 <label> Topping 1
                    <input 
                    name="topping1"
                    type="checkbox"
                    value={value.topping1}
                    onChange={onChange}
                    />
                </label>   
                </section>
                <section>
                    <label> Topping 2
                    <input 
                    name="topping2"
                    type="checkbox"
                    value={value.topping2}
                    onChange={onChange}
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

            <input type="submit" value="Add to Order" />
            </form>
        </div>
        
    )
}

export default Form