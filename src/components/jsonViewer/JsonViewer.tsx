import { Paper, TextareaAutosize } from '@mui/material';

export const JSONViewer: React.FC = () => {
  return (
    <Paper
      style={{ padding: '16px', minHeight: 'false', backgroundColor: '#1e1e1e', color: 'white' }}
    >
      <TextareaAutosize
        minRows={32}
        style={{
          width: '100%',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          backgroundColor: '#1e1e1e',
          color: 'white',
          resize: 'none',
        }}
        value={JSON.stringify({})}
        readOnly
      />
    </Paper>
  );
};
