declare global {
  namespace Jss {
    export interface Theme {
      palette: {
        primary: string
        secondary: string
        grey: string
        white: string
      }
      spacing: {
        sm: string
        md: string
        lg: string
      }
    }
  }
}

export {}
