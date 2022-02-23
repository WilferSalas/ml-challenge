// @packages
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { FC, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

// @scripts
import SearchComponent from "./Search";

// @images
import logo from "../../assets/images/logo.png";

const HeaderComponent: FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const handleOnOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnSubmit = () => {
    // TODO - on submit logic
  };

  const onClickIcon = () => {
    navigate("/");
  };

  return (
    <AppBar elevation={0} position="static">
      <Toolbar variant="regular">
        <Container sx={{ display: "flex" }}>
          <Box
            alt="logo"
            component="img"
            onClick={onClickIcon}
            src={logo}
            sx={{ cursor: "pointer", maxHeight: 50 }}
          />
          <SearchComponent
            id="header-component"
            onChange={handleOnOnchange}
            onSubmit={handleOnSubmit}
            value={value}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
