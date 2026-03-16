import React from 'react'
import {Autocomplete, TextField} from '@mui/material'
export default function AffComponent({affaires, formData, setFormData}) {
  return (
    <Autocomplete
        options={affaires}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) => {
            setFormData({...formData, affaire_id: value ? value.id : ""})
        }}
        renderInput={(params) => <TextField {...params} placeholder='Rechercher une affaire' label="Sélectionner une affaire" variant="outlined" fullWidth />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        clearOnEscape
    />
  )
}