import React from 'react'
import { Field } from '../redux/reducers/fields'
import TextField from './components/TextField'
import NumberField from './components/NumberField'


type Props = {
  field: Field
}


const FieldRenderer = (props: Props) => {
  const { field }= props
  switch (field.type) {
    case 'text':
      return <TextField 
                fieldId={field.id}
                fieldName={field.name}
                value={field.value}
              />
    case 'number':
      return <NumberField
              fieldId={field.id}
              fieldName={field.name}
              value={field.value}
            />
    default:
      throw new Error(`Unknown field type: ${field.type}`)
  }
}


export default FieldRenderer