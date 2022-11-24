import React, { useContext } from "react";
import { Context } from "../Contex/quizHolder";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

function Start() {
  const { setStart } = useContext(Context);

  const handleClick = () => {
    setStart(true);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%", height: "100vh",}}
      >
        <Stack sx={{ width: 400, height: 500 }}>
          <Card sx={{ backgroundColor: "#00bcd4", height: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20, color: "white", fontFamily: "cursive" }}
                gutterBottom
                textAlign="center"
              >
                WelCome To Cricket Quiz Session.. !
              </Typography>
              <Typography
                textAlign="center"
                sx={{ color: "white", fontFamily: "auto" }}
              >
                I Wish You Do Your Best!
              </Typography>
            </CardContent>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ height: 400,}}
            >
                <Stack>
                <Typography textAlign='center' sx={{fontFamily:'fantasy'}}>Click Start Button To Start Your Quiz </Typography>
                </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  style={{ backgroundColor: "green" }}
                  variant="contained"
                  size="small"
                  onClick={handleClick}
                >
                  Start
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}

export default Start;
