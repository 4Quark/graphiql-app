import { Button, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import { JSONViewer } from '../jsonViewer/JsonViewer';
import QueryEditor from '../queryEditor/QueryEditor';
import VariablesEditor from '../variablesEditor/VariablesEditor';
import HeadersEditor from '../headersEditor/HeadersEditor';
import { useState } from 'react';
import { TabPanel } from './utils';

const backgroundColor = '#272822';
const Main = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showEditors, setShowEditors] = useState(true);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleEditorsVisibility = () => {
    setShowEditors(!showEditors);
  };

  const variablesStyles = { color: tabValue === 0 ? 'primary.main' : 'grey.500' };
  const headersStyles = { color: tabValue === 1 ? 'primary.main' : 'grey.500' };
  return (
    <Container maxWidth={false} sx={{ mt: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} lg={5} xl={4} sx={{ maxWidth: '100%' }}>
          <QueryEditor />
          <Stack sx={{ margin: 0 }}>
            <Button
              onClick={toggleEditorsVisibility}
              sx={{
                backgroundColor,
                borderRadius: 0,
                ':hover': { backgroundColor: '#4a4c4f' },
                transition: '0.5s',
              }}
              variant="text"
            >
              {showEditors ? 'Hide Editors' : 'Show Editors'}
            </Button>
            {showEditors && (
              <Tabs
                sx={{ backgroundColor: backgroundColor, paddingBottom: 1 }}
                value={tabValue}
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleTabChange}
                aria-label="editor tabs"
              >
                <Tab label="Variables" sx={variablesStyles} />
                <Tab label="Headers" sx={headersStyles} />
              </Tabs>
            )}
            {showEditors && (
              <>
                <TabPanel value={tabValue} index={0}>
                  <VariablesEditor />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <HeadersEditor />
                </TabPanel>
              </>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={4} sx={{ maxWidth: '100%' }}>
          <JSONViewer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
