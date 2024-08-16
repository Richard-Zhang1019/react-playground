import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import Editor from './Editor'
import View from './View'

interface IndexProps {}

const Index: FC<IndexProps> = ({}) => {
  return (
    <Flex>
      <Editor />
      <View />
    </Flex>
  )
}

export default Index
