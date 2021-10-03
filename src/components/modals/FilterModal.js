import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

function FilterDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            
          </Grid>
          <Grid item xs={4}>
            {/* <Item>xs=4</Item> */}
          </Grid>
          <Grid item xs={4}>
            {/* <Item>xs=4</Item> */}
          </Grid>
          <Grid item xs={8}>
            {/* <Item>xs=8</Item> */}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Hello</Button>
      </DialogActions>
    </Dialog>
  );
}

FilterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default FilterDialog;
