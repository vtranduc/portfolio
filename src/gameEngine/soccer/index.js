class SoccerEngine {
  constructor(fieldHeight, playerSpec, ballSpec) {
    this.players = {};
    this.ball = { x: null, y: null };
    this.playerSpec = {
      bottomRight: {
        x: 1 - playerSpec.size.width,
        y: fieldHeight - playerSpec.size.height
      },
      accelMag: playerSpec.accelMag
    };
  }
  addPlayer(id, team, pos) {
    this.players[id] = {
      team: team,
      pos: pos,
      vel: { x: 0, y: 0 },
      accel: { x: 0, y: 0 },
      commands: { x: "", y: "" }
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
      this.moveByCommand(this.players[id], this.playerSpec.accelMag, duration);
    }
  }
  moveByCommand(item, accelMag, time) {
    const vector = this.getCommandVector(item);
    if (vector) {
      this.updateAccel(item, this.getUnitVector(vector), accelMag);
      this.moveItem(item, time);
    } else {
      // TEMPORARILY RETURNS THE OBJECT TO TOP LEFT CORNER!
      item.pos = { x: 0, y: 0 };
      item.vel = { x: 0, y: 0 };
    }
  }

  //============================================================
  moveItem(item, time) {
    item.pos.x += this.displacement(item.vel.x, item.accel.x, time);
    item.pos.y += this.displacement(item.vel.y, item.accel.y, time);
    item.vel.x += item.accel.x * time;
    item.vel.y += item.accel.y * time;
  }
  displacement(vi, accel, time) {
    return vi * time + 0.5 * accel * time * time;
  }
  updateAccel(item, unitVector, accelMag) {
    item.accel.x = unitVector.x * accelMag;
    item.accel.y = unitVector.y * accelMag;
  }
  getUnitVector(vector) {
    const speed = this.getSpeed(vector);
    return speed === 0 ? null : { x: vector.x / speed, y: vector.y / speed };
  }
  getSpeed(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  }
  getCommandVector(item) {
    return item.commands.x === ""
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
  }
}
export default SoccerEngine;
