import React from 'react'
import {Autocomplete, TextField} from '@mui/material'

export default function FormComponent({affaires, formData, setFormData, placeholder, label, entity}) {
  return (
    <Autocomplete
         options={affaires}
         getOptionLabel={(option) => option.title}
         onChange={(event, value) => {
             setFormData({...formData, affaire_id: value ? value.id : ""})
         }}
         renderInput={(params) => <TextField {...params} placeholder={placeholder} label={label} variant="outlined" fullWidth />}
         isOptionEqualToValue={(option, value) => option.id === value.id}
         clearOnEscape
    />
  )
}
