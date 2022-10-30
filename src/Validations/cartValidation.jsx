import * as yup from 'yup'

export const cartSchema = yup.object().shape({
    nombre: yup.string().required(),
    email: yup.string().email().required()
})