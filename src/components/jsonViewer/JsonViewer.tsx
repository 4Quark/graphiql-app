// JSONViewer.tsx
import { Paper, TextareaAutosize } from '@mui/material';

export const JSONViewer: React.FC = () => {
  return (
    <Paper
      style={{ padding: '16px', minHeight: '200px', backgroundColor: '#1e1e1e', color: 'white' }}
    >
      <TextareaAutosize
        minRows={10}
        style={{
          width: '100%',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          backgroundColor: '#1e1e1e',
          color: 'white',
        }}
        value={JSON.stringify({})}
        readOnly
      />
    </Paper>
  );
};
