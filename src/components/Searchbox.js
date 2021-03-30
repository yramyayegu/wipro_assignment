import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import getSuggestions from "../utilities/API"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(5),
    },
  },
}));

export default function Searchbox() {
  const classes = useStyles();
  const [output, setoutput] = useState([]);

  {/** Input function will take typed values from input box */}
  const input = (e) => {
    let value = e.target.value;
    {/** send that input values to getSuggestions imported from ../utilities/API */}
    {/** API file will return some output as options in array */}
    var result = getSuggestions(value)
    {/** array of result will be converted to object one by one with title */}
    let output_extend = result.map((title) => (
      { title }
    ))

    {/** objects are checked whether they already exist or not if not they will be send to setoutput  */}
    output_extend.map((data) => {
      const found = output.some(el => el.title === data.title);
      if (data !== "" && !found) {
        setoutput([...output, data])
      }
    })
  }
  return (
    <div className={classes.root}>

      {/**  Autocomplete widget is used for searching */}
      {/** Autocomplete includes dropdown and highleting searching words accordingly */}

      {/** Search data view is limited to 2 when it focus out */}
      {/** Dropdown for Auto suggest will disapper on focus out */}
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={output}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            onKeyUp={(e) => input(e)}
            {...params}
            variant="standard"
            label="Search"
            placeholder="Type to Search"
          />
        )}


        renderOption={(option, { inputValue }) => {
          const matches = match(option.title, inputValue);
          const parts = parse(option.title, matches);
          return (
            <div>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}

      />
    </div>
  );
}