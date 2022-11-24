import React, { useContext, useState } from "react";
import { Context } from "../Contex/quizHolder";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function Quiz() {
  const [current, setCurrent] = React.useState(0);

  const { quizData, correct, setCorrect, setExit } = useContext(Context);

  const [ans, setAns] = useState("");

 
  const handleSaveNext = () => {
    if (quizData[current]?.correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizData.length) {
      setExit(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleExit = () => {
    setExit(true);
  };

  const handleReset = () => {
    setAns("");
  };

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
                Question No. {current} / {quizData.length}
              </Typography>
              <Typography
                // textAlign="center"
                sx={{
                  color: "black",
                  fontFamily: "auto",
                  fontWeight: "600",
                  fontSize: "16px",
                  mt: 2,
                }}
              >
                {quizData[current]?.question} ?
              </Typography>

              <Stack spacing={1} sx={{ mt: 2 }}>
                <List>
                  <ListItem
                    disablePadding
                    style={{
                      backgroundColor: `${ans === "a" ? "green" : "white"} `,
                      borderRadius: "12px",
                    }}
                    onClick={() => setAns("a")}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography textAlign="center">
                            {quizData[current]?.a}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>

                <List>
                  <ListItem
                    disablePadding
                    style={{
                      backgroundColor: `${ans === "b" ? "green" : "white"} `,
                      borderRadius: "12px",
                    }}
                    onClick={() => setAns("b")}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography textAlign="center">
                            {quizData[current]?.b}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>

                <List>
                  <ListItem
                    disablePadding
                    style={{
                      backgroundColor: `${ans === "c" ? "green" : "white"} `,
                      borderRadius: "12px",
                    }}
                    onClick={() => setAns("c")}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography textAlign="center">
                            {quizData[current]?.c}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>

                <List>
                  <ListItem
                    disablePadding
                    style={{
                      backgroundColor: `${ans === "d" ? "green" : "white"} `,
                      borderRadius: "12px",
                    }}
                    onClick={() => setAns("d")}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography textAlign="center">
                            {quizData[current]?.d}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </CardContent>

            <CardActions>
              <Stack direction="row" spacing={9}>
                <Button
                  sx={{ borderRadius: "0px", backgroundColor: "#f10e17" }}
                  variant="contained"
                  size="small"
                  onClick={handleExit}
                >
                  Exit
                </Button>
                <Button
                  sx={{ borderRadius: "0px", backgroundColor: "firebrick" }}
                  variant="contained"
                  size="small"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  sx={{ borderRadius: "0px", backgroundColor: "darkgreen" }}
                  variant="contained"
                  size="small"
                  onClick={handleSaveNext}
                >
                  Save & Next
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}

export default Quiz;
