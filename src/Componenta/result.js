import React, { useContext } from "react";
import { Context } from "../Contex/quizHolder";
import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

function Result() {
  const { correct, setExit, setStart, quizData, setCorrect } =
    useContext(Context);

  const handlePlayAgain = () => {
    setCorrect(0);
    setExit(false);
    setStart(false);
  };

  console.log("------------", correct);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%", height: "100vh" }}
      >
        <Stack sx={{ width: 400, height: 500 }}>
          <Card sx={{ backgroundColor: "#00bcd4", height: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20, color: "white", fontFamily: "cursive" }}
                gutterBottom
                textAlign="center"
              >
                Thank You!
              </Typography>
            </CardContent>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ height: 400 }}
            >
              {correct >= quizData.length - 1 && (
                <Stack direction="row" spacing={1}>
                  <Typography textAlign="center" sx={{ fontFamily: "fantasy" }}>
                    Congratulation ! You did very Good
                  </Typography>
                  <SentimentSatisfiedAltIcon />
                </Stack>
              )}

              <Stack direction="row" spacing={1}>
                <Typography textAlign="center" sx={{ fontFamily: "fantasy" }}>
                  {correct} are correct Out Of {quizData.length}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  size="small"
                  style={{ backgroundColor: "#1d211d" }}
                  onClick={handlePlayAgain}
                >
                  Play Again
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems='center' justifyContent="center">
             <Typography sx={{fontFamily:'emoji', fontSize:'14px', color:'white'}}>
               Developer - RIZWAN AHMAD KHAN
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}

export default Result;
