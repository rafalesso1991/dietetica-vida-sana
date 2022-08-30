import { Counter } from './app/slices/counter/Counter';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from "./react-components/Copyright";

export default function App() {
  return (
    <Container>
      <Box>
        <Counter />
        <Copyright />
      </Box>
    </Container>
  );
};