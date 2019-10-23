import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import useKeyPress from "../../helpers/useKeyPress";
import SoccerEngine from "../../gameEngine/soccer/index";
import "./index.css";

const fieldHeight = 700 / 1100;
const playerSpec = { size: { width: 0.06, height: 0.09 }, accelMag: 0.8 };
const ballSpec = { size: { width: 0.05, height: 0.05 } };
const engine = new SoccerEngine(fieldHeight, playerSpec, ballSpec);

const tempId = "yami noma!";
const tempId2 = "onyanoko";

export default function Soccer() {
  const [gameStat, setGameStat] = useState(null);

  const fieldSpec = {
    height: 700,
    width: 1100,
    top: 100,
    left: 20
    // goalSize: 0.25
  };

  const adjustment = {
    scale: fieldSpec.width,
    shift: { x: fieldSpec.left, y: fieldSpec.top }
  };

  const w = useKeyPress(["w", "W", "ArrowUp"]);
  const a = useKeyPress(["a", "A", "ArrowLeft"]);
  const d = useKeyPress(["d", "D", "ArrowRight"]);
  const s = useKeyPress(["s", "S", "ArrowDown"]);

  useEffect(() => {
    engine.addPlayer(tempId, 0, { x: 0, y: 0 });
    const frameDuration = 100;
    const game = setInterval(() => {
      engine.updateGame(frameDuration / 1000);
      setGameStat(engine.getStat());
    }, frameDuration);
    return () => {
      clearInterval(game);
    };
  }, []);

  useEffect(() => {
    engine.xDirCommand(tempId, a ? (d ? "" : "left") : d ? "right" : "");
  }, [a, d]);
  useEffect(() => {
    engine.yDirCommand(tempId, w ? (s ? "" : "up") : s ? "down" : "");
  }, [w, s]);

  return (
    // <div id="soccer-parent">
    <Paper id="soccer-paper">
      <img
        src="assets/soccer/field.png"
        alt="soccer-field"
        style={{
          height: fieldSpec.height,
          width: fieldSpec.width,
          borderRadius: "10px",
          position: "absolute",
          top: fieldSpec.top,
          left: fieldSpec.left
        }}
      ></img>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          width: "100px",
          height: "100px",
          top: "100px",
          left: "300px"
        }}
      ></div>
      {gameStat && (
        <div>
          <div style={{ border: "solid blue" }}>The game is on now!</div>
          {gameStat.players.map(e => {
            return (
              <div
                key={e.id}
                style={{
                  backgroundColor: "blue",
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  top: e.pos.y * adjustment.scale + adjustment.shift.y,
                  left: e.pos.x * adjustment.scale + adjustment.shift.x
                }}
              ></div>
            );
          })}
        </div>
      )}
    </Paper>
    // </div>
  );
}
