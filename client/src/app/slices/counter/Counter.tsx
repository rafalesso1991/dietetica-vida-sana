import { useAppSelector, useAppDispatch } from '../../hooks'
import { decrement, increment, incrementBy } from './CounterSlice'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.counter)
    const dispatch = useAppDispatch()
  return (
<>
    <Typography>
        Contador: { count }
    </Typography>
    <Button color='secondary' variant="contained" onClick={ () => dispatch(increment())} >
        +1
    </Button>
    <Button color='secondary' variant="contained" onClick={ () => dispatch(decrement())}>
        -1
    </Button>
    <Button color='secondary' variant="contained" onClick={ () => dispatch(incrementBy(10))}>
        +10
    </Button>
</>
  )
}