import { extendTheme } from '@chakra-ui/react'

//substituir
export const theme = extendTheme({
  colors:{
    gray: {
      "900": "#181b23",
      "800" : "#1f2029",
      "700" : "#353646",
      "600" : "#47585B",
      "500" : "#616480",
      "400" : "#797d9a",
      "300" : "#9699b0",
      "200" : "#b3b5c6",
      "100" : "#DADADA",
      "50" : "##F5F8FA",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  //os temas
  styles:{
    //globais
    global: {
      //para que o body tenha
      body:{
        bg: 'gray.50',
        color: 'gray.100'
      }
    }
  }
})