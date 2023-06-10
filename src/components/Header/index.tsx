import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { InputSearch } from "../Inputs/input.styled";

interface IHeader {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string;
}

const Header = ({ onChange, onKeyDown, value }: IHeader) => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        width: "100%",
        height: { xs: "400px", sm: "500px", md: "600px" },
        borderRadius: { xs: "64px", sm: "80px", md: "100px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding="50px"
        spacing={3}
      >
        <Typography
          fontFamily="Poppins"
          fontWeight="500"
          fontSize={{ xs: "24px", sm: "40px", md: "64px" }}
          textAlign="center"
          color="#FFFFFF"
        >
          Explore the world’s leading photos
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontWeight="275"
          fontSize={{ xs: "14px", sm: "16px", md: "20px" }}
          textAlign="center"
          color="#FFFFFF"
          sx={{ maxWidth: "800px" }}
        >
          Millions of designers and photographer around the world showcase their
          best - the home to the world’s best design and photographer
          professionals.
        </Typography>
        <InputSearch
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search for photos..."
        />
      </Stack>
    </Box>
  );
};

export default Header;
