import { CircularProgress } from '@chakra-ui/react'
import React from 'react'

const loading = () => {
  return (
    <div className='grid place-items-center h-[90vh]'>
        <CircularProgress isIndeterminate color='green.300' />
    </div>
  )
}

export default loading