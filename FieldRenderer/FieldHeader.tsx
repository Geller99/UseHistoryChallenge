import React from 'react'

type Props = {
  name: string
}

const FieldHeader = (props: Props) => {
  return <h4 style={{marginBottom: 16}}>
    {props.name}
  </h4>
}

export default FieldHeader