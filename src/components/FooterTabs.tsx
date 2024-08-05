import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  artsAndCulture,
  beach,
  categories,
  mountains,
  outdoors,
  popular,
  thingsToDo,
  uniqueStays,
} from "../utils/constant";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FooterTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="border-b p-5">
      <h1 className="font-normal md:font-medium tracking-wide text-[22px] text-[#555555]">
        Inspirations for future getaways
      </h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons
            aria-label="basic tabs example"
          >
            <Tab label="popular" {...a11yProps(0)} />
            <Tab label="Arts and Culture" {...a11yProps(1)} />
            <Tab label="Outdoors" {...a11yProps(2)} />
            <Tab label="Mountains" {...a11yProps(3)} />
            <Tab label="beach" {...a11yProps(4)} />
            <Tab label="unique stays" {...a11yProps(5)} />
            <Tab label="categories" {...a11yProps(6)} />
            <Tab label="Things to do" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {popular.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.location}</p>
                <p className="text-sm font-extralight">{item.rentalType}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {artsAndCulture.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.location}</p>
                <p className="text-sm font-extralight">{item.rentalType}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {outdoors.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.location}</p>
                <p className="text-sm font-extralight">{item.rentalType}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {mountains.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.location}</p>
                <p className="text-sm font-extralight">{item.rentalType}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {beach.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.location}</p>
                <p className="text-sm font-extralight">{item.rentalType}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {uniqueStays.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.rentalType}</p>
                <p className="text-sm font-extralight">{item.country}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {categories.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {thingsToDo.map((item, index) => (
              <div className="my-2" key={index}>
                <p className="text-sm font-normal">{item.city}</p>
                <p className="text-sm font-extralight">{item.region}</p>
              </div>
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
