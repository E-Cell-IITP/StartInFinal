/* eslint-disable */
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import React from "react";

function Dropdown({ query, handleChange, options }) {
  const handleClick = (eve) => {
    handleChange(eve.target.value);
  };
  return (
    <Grid container direction="row" >
      <Grid item xs={8} >
        <FormControl variant="standard">
          {/* <InputLabel htmlFor="query-native-simple">Select a type!</InputLabel> */}
          <Select native value={query} onChange={(eve)=>handleClick(eve)}>
            {options.map((val, ind) => (
              <option key={val['label']} value={val['id']}>
                {val['label']}
              </option>
            ))}
            ;
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}


export default Dropdown;
