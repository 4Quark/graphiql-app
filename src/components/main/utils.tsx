import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TabPanelProps } from './Main.types';
import { Stack } from '@mui/material';

export function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </Stack>
  );
}
