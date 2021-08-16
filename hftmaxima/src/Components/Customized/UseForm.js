import React from 'react';
export function UseForm(initialState){
    const [values,setValues] = React.useState(initialState)
    const handleInputChange = (e)=>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value,
        })
    }
    return{
        handleInputChange,
        values,
        setValues,
    }
}

export function Form({children,...others}){
    return(
        <form autoComplete='off' {...others}>
        {children}
        </form>
    )
}