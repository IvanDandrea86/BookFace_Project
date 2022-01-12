import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';
import { useHistory} from 'react-router-dom';
import { SearchContext } from '../Context/search-context';

import { useContext } from 'react'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  

function SearchBar() {
 
  const value = useContext(SearchContext);
  

  const history = useHistory();

  const [keyword, setKeyword] = useState ('');
  value.searchHandler(keyword)
  const handleChange=(e)=>{
    setKeyword(e)
    
    console.log(e.length)
    if (e.length> 1 ){
      history.push("/finding")
      history.go(+1)
    
    }
  }
    return (
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Box
            component="form"
            onSubmit={ (e) => {
              e.preventDefault();
              alert("gotta submit");
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <StyledInputBase
              onChange={(e) => {handleChange(e.target.value)}}
              value={keyword}
              placeholder="Find friends…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Box>
          </Search>
    )
}

export default SearchBar
