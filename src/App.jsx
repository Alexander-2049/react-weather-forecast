import WeatherWrapper from "./components/WeatherWrapper"
import SelectLanguage from "./components/SelectLanguage"
import { Container } from "@mui/system"

function App() {

  return (
    <>
      <Container sx={{marginY: 8}} maxWidth="lg"><SelectLanguage/></Container>
      <Container sx={{marginY: 8}} maxWidth="lg"><WeatherWrapper/></Container>
    </>
  )
}

export default App
