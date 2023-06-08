import WeatherWrapper from "./components/WeatherWrapper"
import SelectLanguage from "./components/SelectLanguage"
import { Container } from "@mui/system"
import { useEffect } from "react"

function App() {

  return (
    <>
      <Container sx={{marginY: 8}} maxWidth="sm"><SelectLanguage/></Container>
      <Container sx={{marginY: 8}} maxWidth="sm"><WeatherWrapper/></Container>
    </>
  )
}

export default App
