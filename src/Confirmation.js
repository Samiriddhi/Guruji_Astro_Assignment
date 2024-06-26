import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Person, Home } from '@mui/icons-material';

const Confirmation = ({ formData }) => {
  return (
    <>
      <p style={{color: "gray"}}>Confirm Your Informations</p>
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={formData.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={formData.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary={formData.phone} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Home />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address Line 1" secondary={formData.address1} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Home />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address Line 2" secondary={formData.address2} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Home />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="City" secondary={formData.city} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Home />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="State" secondary={formData.state} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Home />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zip Code" secondary={formData.zip} />
      </ListItem>
    </List>
    </>
  );
};

export default Confirmation;
