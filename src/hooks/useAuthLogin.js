/* eslint-disable prettier/prettier */
import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../action/AuthAction'
import { useForm } from '../hooks'

export const AuthLogin = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const toaster = useRef()

    const loading = useSelector((state) => state.Auth.loading)
    const EnviologinUser = (Dataform) => dispatch(loginUser(Dataform));
    const [validated, setValidated] = useState(false)
    const [estatus, setEstatus] = useState()

    const [formValues, handleInputChange] = useForm({})
    const { email, password } = formValues

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
          try {
            let resp = await EnviologinUser({ users: email, password })
            if (resp.success === true) {history.push('/dashboard') }
              setEstatus(resp.response)

             } catch (Error) {
              console.log(Error)
              setEstatus(Error)
            }
        }
       setValidated(true)
    }

  return {
      handleSubmit,
      handleInputChange,
      formValues,
      estatus,
      toaster,
      history,
      loading,
      validated
  }
}
