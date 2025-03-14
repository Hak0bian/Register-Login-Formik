import * as YUP from 'yup'

const validation = YUP.object().shape({
    name : YUP
        .string()
        .min(5, "Min length 5")
        .max(15, "Max length 15")
        .required("Name is required !"),
    lastName : YUP
        .string()
        .min(5, "Min length 5")
        .max(15, "Max length 20")
        .required("Lastname is required !"),
    email : YUP
        .string()
        .email("Invalid Email")
        .required("Email is required !"),
    pass : YUP
        .string()
        .required("Password is required !"),
})

export default validation