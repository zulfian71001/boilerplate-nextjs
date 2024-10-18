"use client"

import { childrenProps } from "@/@types"
import { ThemeProvider } from "next-themes"

const NextThemeProvider = ({children}:childrenProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default NextThemeProvider
