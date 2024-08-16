import { Box, Center, Flex, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

import Icon from '@/assets/img/logo_dark.svg'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Flex
      h={60}
      px={20}
      justifyContent="space-between"
      alignItems="center"
      fontSize={18}
      borderBottom="1px solid #8a898923"
    >
      <Flex
        px={4}
        cursor="pointer"
        onClick={() => {
          navigate('/')
        }}
      >
        <Img src={Icon} w={40} h={40} />
        <Center marginLeft={8} fontWeight={700} fontSize={20}>React Playground</Center>
      </Flex>

      <Flex gap={18} mr={10} mt={10}>
        <Box
          cursor="pointer"
          onClick={() => {
            window.open(
              'https://github.com/Richard-Zhang1019/react-playground',
              'blank'
            )
          }}
        >
          <AiFillGithub size={22} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
