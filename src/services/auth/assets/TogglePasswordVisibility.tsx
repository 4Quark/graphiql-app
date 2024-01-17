import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

interface ToggleVisibilityProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TogglePasswordVisibility: React.FC<ToggleVisibilityProps> = ({
  visible,
  setVisible,
}) => {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => setVisible(!visible)}>
        {visible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};
