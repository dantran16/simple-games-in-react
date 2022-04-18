import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: props => ({
    body: {
      fontSize: 18
    }
  })
}

const fonts = {
  body: "'Poppins'",
  heading: "'Poppins'"
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const customTheme = extendTheme({
  config,
  styles,
  fonts
})

export default customTheme;