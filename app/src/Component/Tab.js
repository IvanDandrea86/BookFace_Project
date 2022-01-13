import * as React from 'react';
import './Tab.css'; 
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chat from './Chat';
import { Avatar } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='box'
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 900, Maxwidth: 1200}}
    >

 
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width:200, }}
      >


 
        <Tab label="User One" icon={<Avatar className='icon'/>}  iconPosition="start"  {...a11yProps(0)} />
        <Tab label="User Two" icon={<Avatar className='icon' />}   iconPosition="start"  {...a11yProps(1)} />
        <Tab label="User Three" icon={<Avatar className='icon'/>}  iconPosition="start" {...a11yProps(2)} />
        <Tab label="User Four" icon={<Avatar className='icon'/>} iconPosition="start" {...a11yProps(3)} />
        <Tab label="User Five"icon={<Avatar className='icon'/>} iconPosition="start"  {...a11yProps(4)} />
        <Tab label="User Six" icon={<Avatar className='icon' />} iconPosition="start" {...a11yProps(5)} />
        <Tab label="User Seven" icon={<Avatar className='icon'/>} iconPosition="start" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Chat />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
