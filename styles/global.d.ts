declare global {
  namespace Jss {
    export interface Theme {
      palette: {
        background: string
        primary: string
        secondary: string
        secondaryTint: string
        grey: string
      }
      spacing: {
        sm: string
        md: string
        lg: string
        xl: string
      }
      component: {
        nav: {
          height: string
        }
        socialBar: {
          width: string
        }
      }
    }
  }
}

export {}
