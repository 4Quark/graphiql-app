import { Container, Grid } from '@mui/material';
import { JSONViewer } from '../jsonViewer/JsonViewer';
import QueryEditor from '../queryEditor/QueryEditor1';
const Main = () => {
  return (
    <Container maxWidth={false} style={{ marginTop: '1rem' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} lg={5} xl={4} style={{ maxWidth: '100%' }}>
          <QueryEditor />
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={4} style={{ maxWidth: '100%' }}>
          <JSONViewer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
