import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Selector = ({ status, className, setStatus }) => (
  <FormControl variant="outlined" className={className}>
    <InputLabel id="status">Status</InputLabel>
    <Select
      labelId="status"
      id="status-selector"
      value={status}
      onChange={(event) => setStatus(event.target.value)}
      label="Status"
    >
      <MenuItem value="Not read">
        Not read
      </MenuItem>
      <MenuItem value="Read">
        Read
      </MenuItem>
      <MenuItem value="Reading">
        Reading
      </MenuItem>
    </Select>
  </FormControl>
);

export default Selector;
