import React from 'react'

const Form = (props) => {

    const {name, value, submit, update} = props;

const onChange = (evt) => {
   const {name, value} = evt.target;
   update(name, value)
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
    }



    return (
        <div id="pizza-container">Form
            <Form>
                <label>
                    <input 
                    name="name"
                    type="text"
                    value={value.name}
                    onChange={onChange}
                    />
                    <input 
                    name="name"
                    type="text"
                    value={value.size}
                    onChange={onChange}
                    />
                    <input 
                    name="name"
                    type="text"
                    value={value.topping1}
                    onChange={onChange}
                    />
                    <input 
                    name="name"
                    type="text"
                    value={value.topping2}
                    onChange={onChange}
                    />
                    <input 
                    name="name"
                    type="text"
                    value={value.special}
                    onChange={onChange}
                    />
                     
                </label>


            </Form>
        </div>

    )
}

export default Form