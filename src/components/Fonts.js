import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global 
      styles={`
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;0,800;1,400&display=swap");
      `}
      />
  )
}

export default Fonts