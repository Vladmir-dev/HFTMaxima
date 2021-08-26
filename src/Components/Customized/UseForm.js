import React from 'react';
export function UseForm(initialState){
    const [values,setValues] = React.useState(initialState)
    const [passwordShow,setPasswordShow] = React.useState(false)
    const handleInputChange = (e)=>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value,
        })
    }
    const handleShowPassword=()=>{
        setPasswordShow(true)
    }
    return{
        handleInputChange,
        values,
        setValues,
        passwordShow,
        handleShowPassword,
    }
}

export function Form({children,...others}){
    return(
        <form autoComplete='off' {...others}>
        {children}
        </form>
    )
}