import React from "react";

import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


const Tablet = () => {
  return (
    <Paper>
      <Tabs textcolor="primary" indicateColor="primary" centered>
        <Tab label="Questions"></Tab>
      </Tabs>
    </Paper>
  );
};

export default Tablet;
