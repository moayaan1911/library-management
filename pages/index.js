import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {address, ABI} from './_context'
const index = () => {

  return (
    <div>
      {address}
    </div>
  )
}

export default index
