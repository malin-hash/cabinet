import React from 'react'
import {TextField} from '@mui/material'
export default function TextaRea({formData, setFormData}) {
  return (
    <TextField
        label="Description du dossier"
        placeholder="Exemple: Dossier concernant le litige ..."
        multiline
        minRows={4}
        maxRows={10}
        variant="outlined"
        fullWidth
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
    />
  )
}
