import React from "react";
import { Stack, Typography } from "@mui/material";

import { useStateContext } from "../context/StateContext";

const BodyPart = ({ item }) => {
  let part = item.replace(/ /g, "");

  const { setBodyPart, bodyPart, setCurrentPage } = useStateContext();

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        border: bodyPart === item ? "4px solid #1b1b1b" : "",
        backgroundColor: "#fff",
        borderRadius: "20px",
        width: "200px",
        height: "200px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        setCurrentPage(1);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}>
      <img
        src={require(`../assets/icons/${part}.png`)}
        alt={`${item} icon`}
        style={{ width: "60px", height: "60px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#1b1b1b"
        textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
