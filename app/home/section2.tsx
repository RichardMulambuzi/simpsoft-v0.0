import Container from "@mui/material/Container/Container";
import * as React from "react";
export default function Section2() {
  return (
    <>
      <Container
        sx={{
          height: "100vh",
          width: "1400px",
          scrollSnapAlign: " center",
          display: "flex",
          justifyContent: "center",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          overflowY: "auto",
        }}
      >
        hi 2
      </Container>
    </>
  );
}
