import React from 'react'
import {Autocomplete, TextField} from '@mui/material'
export default function ClientComponent({clients, formData, setFormData}) {
  return (
    <Autocomplete
        options={clients}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
            setFormData({...formData, client_id: value ? value.id : ""})
        }}
        renderInput={(params) => <TextField {...params} placeholder='Rechercher un client' label="Sélectionner un client" variant="outlined" fullWidth />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        clearOnEscape
    />
  )
}
