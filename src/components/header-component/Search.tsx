// @packages
import Box from "@mui/material/Box";
import React, { ChangeEventHandler, FC } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export interface Props {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit: () => void;
  value: string;
}

const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      background: "white",
      color: "black",
    },
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CssButton = styled(Button)<ButtonProps>({
  backgroundColor: grey[300],
  color: grey[600],
  "&:hover": {
    backgroundColor: grey[300],
    color: grey[600],
  },
});

const Search: FC<Props> = ({ id, onChange, onSubmit, value }) => (
  <Stack
    alignItems="center"
    direction="row"
    id={`search-component-${id}`}
    sx={{ px: 8, width: "100%" }}
  >
    <CssTextField
      color={undefined}
      fullWidth
      id={`search-input-${id}`}
      onChange={onChange}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder="Nunca dejes de buscar"
      size="small"
      value={value}
      InputProps={{
        endAdornment: (
          <CssButton variant="outlined" onClick={onSubmit}>
            <SearchIcon />
          </CssButton>
        ),
      }}
    />
  </Stack>
);

export default Search;
