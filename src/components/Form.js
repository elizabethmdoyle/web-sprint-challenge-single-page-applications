import React from 'react'

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
        
        <div id="order-pizza"> Form
            <form id="pizza-form" onSubmit={onSubmit}>
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
                    id="email"
                    name="email"
                    type="text"
                    value={value.email}
                    onChange={onChange}
                    />
                </label>
                <label> Phone
                    <input 
                    id="phone"
                    name="name"
                    type="text"
                    value={value.phone}
                    onChange={onChange}
                    />
                </label>
                <label> Size
                    <select id="size-dropdown" value={value.size} name="size-input">
                        <option name="size" >Select A Size</option>
                        <option value="medium"></option>
                        <option value="large"></option>
                        <option value="extra-large"></option>
                        <option value="personal"></option>
                    </select>
                </label>
                <label> Topping 1
                    <input 
                    id="topping1"
                    name="topping1"
                    type="text"
                    value={value.topping1}
                    onChange={onChange}
                    />
                </label>
                <label> Topping 2
                    <input 
                    id="topping2"
                    name="topping2"
                    type="text"
                    value={value.topping2}
                    onChange={onChange}
                    />
                </label>
                <label> Special
                    <input
                    id="special-text"
                    name="special"
                    type="text"
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