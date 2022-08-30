import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/Diet%C3%A9tica-Vida-Sana-103786834750937">
        Dietetica Vida Sana
      </Link>
      {' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}