import { Container, Grid, Tab, Tabs } from '@mui/material';
import { JSONViewer } from '../jsonViewer/JsonViewer';
import QueryEditor from '../queryEditor/QueryEditor';
import VariablesEditor from '../variablesEditor/VariablesEditor';
import HeadersEditor from '../headersEditor/HeadersEditor';
import { useState } from 'react';
import { TabPanel } from './utils';
const Main = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Container maxWidth={false} style={{ marginTop: '1rem' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} lg={5} xl={4} style={{ maxWidth: '100%' }}>
          <QueryEditor />
          <Tabs
            sx={{ backgroundColor: '#272822' }}
            value={tabValue}
            onChange={handleTabChange}
            aria-label="editor tabs"
          >
            <Tab label="Variables" />
            <Tab label="Headers" />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <VariablesEditor />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <HeadersEditor />
          </TabPanel>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={4} style={{ maxWidth: '100%' }}>
          <JSONViewer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
