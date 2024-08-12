import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm({ onSubmit, onChange, value }) {
  return (
    <Box 
        component="form"
        onSubmit={onSubmit}
        sx={{
            mb: 5,
            display: {
              xs: 'block',
              sm: 'flex'
            },
            gap: 3
          }}
        className="search-form"
    >
      <TextField
        id="search"
        label="Enter username or email"
        variant="outlined"
        fullWidth
        onChange={onChange}
        value={value}
        sx={{
            mb: {
              xs: '15px',
              sm: '0'
            },
            backgroundColor: 'white',
          }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!value}
        size="large"
        endIcon={<SearchIcon />}
        sx={{ fontWeight: 'bold' }}
    >
        Search
      </Button>
    </Box>
  );
}
