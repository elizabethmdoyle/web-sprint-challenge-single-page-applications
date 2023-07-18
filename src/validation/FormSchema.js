import * as yup from 'yup';

const FormSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "name must be at least 2 characters")
            .required("Please Enter Your Name"),
        email: yup
            .string()
            .email("Please Enter A Valid Email Address")
            .required("Please Enter A Valid Email Address ")
            .min(2, "Email must be at least 2 characters"),
        phone: yup
            .number("Please Enter A Valid Phone Number")
            .integer("Please Enter A Valid Phone Number")
            .required("Please Enter A Valid Phone Number ")
            .min(2, "Phone Number must be at least 2 characters"),
        address: yup
            .string()
            .required("Please Enter A Valid Address "),
        crust: yup
            .string()
            .required("Please enter a Crust Selection")
            .oneOf(['buttery, garlic, sesame, cheese'], 'Crust is required'),
        size: yup
            .string()
            .required("Size is Required")
            .oneOf(['medium, large, extra-large, personal'], 'Size is required'),
        sauce: yup
            .string()
            .required("Sauce is Required")
            .oneOf(['classic, marinara, alfredo, buffalo, barbeque'], 'Sauce is required'),
        cheese: yup
            .string()
            .oneOf(['mozzerella, feta, parm, provolone'], 'Cheese is required'),
        extracheese: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        chicken: yup.boolean(),
        beef: yup.boolean(),
        bacon: yup.boolean(),
        pork: yup.boolean(),
        ham: yup.boolean(),
        onions: yup.boolean(),
        gp: yup.boolean(),
        mushrooms: yup.boolean(),
        olives: yup.boolean(),
        tomatoes: yup.boolean(),
        bp: yup.boolean(),
        pineapples: yup.boolean(),
        special: yup
            .string()


})

export default FormSchema