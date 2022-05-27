class RealState {
  constructor(name, adress, rooms, bathrooms, size, cost, evaluation, like) {
    this.name = name; // String
    this.adress = adress; // String
    this.rooms = rooms; // Number
    this.bathrooms = bathrooms; //Number
    this.size = size; //Number
    this.cost = cost; //Number
    this.evaluation = evaluation; //Number
    this.like = like; //Boolean
  }

  setLike(boolVal) {
    this.like = boolVal;
  }

  getJsonData() {
    return {
      name: this.name,
      adress: this.adress,
      rooms: this.rooms,
      bathrooms: this.bathrooms,
      size: this.size,
      cost: this.cost,
      evaluation: this.evaluation,
      like: this.like,
    };
  }
}

export default RealState;
