import FormSignUp from "./components/FormSignUp"
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const handleSubmit = (valores) => {
  console.log("AppJs:", valores )
}

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulario Registro</Typography>
     <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
