import React from 'react'
import {Autocomplete, TextField} from '@mui/material'
export default function AvocatComponent({avocats, formData, setFormData}) {
  return (
    <Autocomplete
        options={avocats}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
            setFormData({...formData, avocat_id: value ? value.id : ""})
        }}
        renderInput={(params) => <TextField {...params} placeholder='Rechercher un avocat' label="Sélectionner un avocat" variant="outlined" fullWidth />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        clearOnEscape
    />
  )
}
