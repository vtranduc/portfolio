class SoccerEngine {
  constructor(fieldHeight, playerSpec, ballSpec) {
    this.fieldHeight = fieldHeight;
    this.players = {};
    this.ball = { x: null, y: null };
    this.playerSpec = {
      permittedRange: {
        x: 1 - playerSpec.size.width,
        y: fieldHeight - playerSpec.size.height
      },
      size: playerSpec.size,
      accelMag: playerSpec.accelMag,
      reverseAccelMag: playerSpec.reverseAccelMag,
      wallBounce: playerSpec.wallBounce
    };
  }
  addPlayer(id, team, pos) {
    this.players[id] = {
      team: team,
      pos: pos,
      vel: { x: 0, y: 0 },
      accel: { x: 0, y: 0 },
      commands: { x: "", y: "" },
      bottomRight: {
        x: pos.x + this.playerSpec.size.x,
        y: pos.y + this.playerSpec.size.y
      }
    };
  }
  xDirCommand(id, dir) {
    this.players[id].commands.x = dir;
  }
  yDirCommand(id, dir) {
    this.players[id].commands.y = dir;
  }
  getPlayers() {
    return Object.keys(this.players);
  }
  getStat() {
    return {
      players: this.getPlayers().map(e => {
        return { id: e, pos: this.players[e].pos };
      })
    };
  }
  updateGame(duration) {
    // Move Players first
    for (let id of this.getPlayers()) {
      this.moveByCommand(
        this.players[id],
        this.playerSpec.accelMag,
        this.playerSpec.reverseAccelMag,
        duration
      );
      // this.updateBottomRight(this.players[id], this.playerSpec.size);
      this.handleItemOutsideRange(
        this.players[id],
        this.playerSpec.permittedRange,
        this.playerSpec.wallBounce
      );
    }
  }
  moveByCommand(item, accelMag, reverseAccelMag, time) {
    const commands = this.getCommandVector(item);
    if (commands) {
      this.updateAccel(item, commands, accelMag);
      this.updateReverseAccel(item, commands, reverseAccelMag);
      this.moveItem(item, time);
    } else {
      // TEMPORARILY RETURNS THE OBJECT TO TOP LEFT CORNER!
      // item.pos = { x: 0, y: 0 };
      // item.vel = { x: 0, y: 0 };
    }
  }

  //============================================================
  updateReverseAccel(item, commands, reverseAccelMag) {
    console.log("reversing", this.getReverseVector(item, commands));
    
  }
  getReverseVector(item, vector) {
    const dir = {
      x:
        vector.x > 0
          ? item.vel.x > 0
            ? 0
            : item.vel.x < 0
            ? 1
            : 0
          : vector.x < 0
          ? item.vel.x < 0
            ? 0
            : item.vel.x > 0
            ? -1
            : 0
          : 0,
      y:
        vector.y > 0
          ? item.vel.y > 0
            ? 0
            : item.vel.y < 0
            ? 1
            : 0
          : vector.y < 0
          ? item.vel.y < 0
            ? 0
            : item.vel.y > 0
            ? -1
            : 0
          : 0
    };
    return dir.x === 0 && dir.y === 0 ? null : this.getUnitVector(dir);
  }
  handleItemOutsideRange(item, permittedRange, wallBounce) {
    if (item.pos.x < 0) {
      item.pos.x = 0;
      item.vel.x = -item.vel.x * wallBounce;
    } else if (item.pos.x > permittedRange.x) {
      item.pos.x = permittedRange.x;
      item.vel.x = -item.vel.x * wallBounce;
    }
    if (item.pos.y > permittedRange.y) {
      item.pos.y = permittedRange.y;
      item.vel.y = -item.vel.y * wallBounce;
    } else if (item.pos.y < 0) {
      item.pos.y = 0;
      item.vel.y = -item.vel.y * wallBounce;
    }
  }
  // updateBottomRight(item, size) {
  //   item.bottomRight.x = item.pos.x + size.x;
  //   item.bottomRight.y = item.pos.y + size.y;
  // }
  moveItem(item, time) {
    item.pos.x += this.displacement(item.vel.x, item.accel.x, time);
    item.pos.y += this.displacement(item.vel.y, item.accel.y, time);
    item.vel.x += item.accel.x * time;
    item.vel.y += item.accel.y * time;
  }
  displacement(vi, accel, time) {
    return vi * time + 0.5 * accel * time * time;
  }
  updateAccel(item, commands, accelMag) {
    item.accel.x = commands.x * accelMag;
    item.accel.y = commands.y * accelMag;
  }
  getUnitVector(vector) {
    const speed = this.getSpeed(vector);
    return speed === 0 ? null : { x: vector.x / speed, y: vector.y / speed };
  }
  getSpeed(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  }
  getCommandVector(item) {
    const dir =
      item.commands.x === ""
        ? item.commands.y === ""
          ? null
          : item.commands.y === "down"
          ? { x: 0, y: 1 }
          : { x: 0, y: -1 }
        : item.commands.x === "right"
        ? item.commands.y === ""
          ? { x: 1, y: 0 }
          : item.commands.y === "down"
          ? { x: 1, y: 1 }
          : { x: 1, y: -1 }
        : item.commands.y === ""
        ? { x: -1, y: 0 }
        : item.commands.y === "down"
        ? { x: -1, y: 1 }
        : { x: -1, y: -1 };
    return dir ? this.getUnitVector(dir) : null;
  }
}
export default SoccerEngine;
