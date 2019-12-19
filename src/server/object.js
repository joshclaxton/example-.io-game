class Object {
  constructor(id, x, y, dir, speed) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.direction = dir;
    this.speed = speed;
    this.desiredX = x;
    this.desiredY = y;
  }

  update(dt) {
    // console.log('update dt', dt)
    if(Math.abs(this.x - this.desiredX) > 5){
      this.x += dt * this.speed * Math.sin(this.direction);
      // console.log('update x', this.x, this.desiredX);
    }
    if(Math.abs(this.y - this.desiredY) > 5)
      this.y -= dt * this.speed * Math.cos(this.direction);
      // console.log('update y', this.y, this.desiredY);
  }

  distanceTo(object) {
    const dx = this.x - object.x;
    const dy = this.y - object.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  setDirection(dir, newX, newY) {
    console.log("object.setdir",dir, newX, newY)
    this.direction = dir;
    this.desiredX = newX;
    this.desiredY = newY;
    console.log(this.direction, this.desiredX,this.desiredY);
  }

  serializeForUpdate() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      desiredX: this.desiredX,
      desiredY: this.desiredY
    };
  }
}

module.exports = Object;
