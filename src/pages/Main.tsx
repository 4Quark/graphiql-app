import { Button, Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import { JSONViewer } from './main/jsonViewer/JsonViewer';
import QueryEditor from './main/queryEditor/QueryEditor';
import { URLInput } from './main/URLInput';
import VariablesEditor from './main/variablesEditor/VariablesEditor';
import HeadersEditor from './main/headersEditor/HeadersEditor';
import { useMemo } from 'react';
import { backgroundColor } from './main/Main.types';
import { useContext, useState } from 'react';
import { TabPanel } from './main/utils';
import { Documentation } from './main/Documentation';
import { AppContext } from '../services/context/AppContextProvider';
import { dictionary } from '../services/localization/dictionary';
import { useAppSelector } from '../services/store/store';

const Main = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showEditors, setShowEditors] = useState(true);
  const { lang } = useContext(AppContext);
  const schema = useAppSelector((state) => state.schema.schema);
  const isDocumentationShow = useAppSelector((state) => state.schema.isDocumentationShow);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  const toggleEditorsVisibility = (): void => {
    setShowEditors(!showEditors);
  };

  const variablesStyles = useMemo(
    () => ({
      color: tabValue === 0 ? 'primary.main' : 'grey.500',
    }),
    [tabValue]
  );

  const headersStyles = useMemo(
    () => ({
      color: tabValue === 1 ? 'primary.main' : 'grey.500',
    }),
    [tabValue]
  );
  return (
    <Container maxWidth={false} sx={{ mt: 2 }}>
      <URLInput />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} lg={isDocumentationShow ? 4 : 5} xl={4} sx={{ maxWidth: '100%' }}>
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
              {showEditors ? dictionary.hide[lang] : dictionary.show[lang]}
              {dictionary.editors[lang]}
            </Button>
            {showEditors && (
              <>
                <Tabs
                  sx={{ backgroundColor: backgroundColor, paddingBottom: 1 }}
                  value={tabValue}
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={handleTabChange}
                  aria-label="editor tabs"
                >
                  <Tab label={dictionary.variables[lang]} sx={variablesStyles} />
                  <Tab label={dictionary.headers[lang]} sx={headersStyles} />
                </Tabs>
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
        <Grid item xs={12} md={6} lg={isDocumentationShow ? 4 : 5} xl={4} sx={{ maxWidth: '100%' }}>
          <JSONViewer />
        </Grid>
        {isDocumentationShow && schema && (
          <Grid item xs={4} lg={3.5}>
            <Documentation />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Main;
