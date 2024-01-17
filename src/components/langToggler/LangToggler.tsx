import { useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import { AppContext } from '../../services/context/AppContextProvider';
import { Typography } from '@mui/material';
import { AntSwitch } from './AntSwitch';

export default function LangToggler() {
  const { toggleLang } = useContext(AppContext);

  return (
    <FormGroup onChange={toggleLang} className="mx-10">
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>EN</Typography>
        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>РУ</Typography>
      </Stack>
    </FormGroup>
  );
}
