import * as YUP from 'yup'

const validation = YUP.object().shape({
    name : YUP
        .string()
        .min(5, "Min length 5")
        .max(15, "Max length 15")
        .required("Name is required !")
        .matches(/^[A-Z][a-z]+$/, "Must start with an uppercase and contain only letters"),
    lastName : YUP
        .string()
        .min(5, "Min length 5")
        .max(20, "Max length 20")
        .required("Lastname is required !")
        .matches(/^[A-Z][a-z]+$/, "Must start with an uppercase and contain only letters"),
    email : YUP
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@/, "Invalid characters before @")
        .matches(/@/, "Email must contain @ symbol")
        .matches(/@[a-zA-Z0-9.-]+$/, "Invalid domain") 
        .matches(/\.[a-zA-Z]{2,4}$/, "Domain must end with a valid extension (com, net)")
        .required("Email is required !"),
    pass : YUP
        .string()
        .min(5, "Min length 5")
        .max(20, "Max length 20")
        .required("Password is required !")
        .matches(/[A-Z]/, "Password must contain one uppercase letter")
        .matches(/[a-z]/, "Password must contain one lowercase letter")
        .matches(/\d/, "Password must contain one number")
})

export default validation