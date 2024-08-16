import { Box } from '@chakra-ui/react'
import { useRoutes } from 'react-router-dom'

import Header from '@/components/Header'
import routes from '@/router'

function App() {
  return (
    <Box className="App" minH="100vh" overflowX="hidden">
      <Header />
      {useRoutes(routes)}
    </Box>
  )
}

export default App
