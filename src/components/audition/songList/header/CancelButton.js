import React from 'react'
import {Button} from 'react-native'
import {colors} from '../../../../constants/styleVariables'

const CancelButton = ({filterOnCancel, setParams}) => (
  <Button
    onPress={() => {
      setParams({mode: 'none'})
      filterOnCancel()
    }}
    title='Cancel'
    color={colors.second}/>
)

export default CancelButton
