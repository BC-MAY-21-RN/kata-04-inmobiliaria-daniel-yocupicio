import dataSet from '../data/dataSet';
import RealState from './RealState';

class ListRealState {
  constructor() {
    this.listData = this.generateList();
  }

  generateList() {
    return Array(5)
      .fill(null)
      .map(item => this.createObject());
  }

  createObject() {
    const number = this.randomNumber();
    return new RealState(
      dataSet[number].name,
      dataSet[number].adress,
      dataSet[number].rooms,
      dataSet[number].bathrooms,
      dataSet[number].size,
      dataSet[number].cost,
      dataSet[number].evaluation,
      dataSet[number].like,
    );
  }

  randomNumber() {
    return Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  }

  incrementData() {
    this.listData = [...this.listData, ...this.generateList()];
  }

  getListData() {
    return this.listData;
  }
}

export default ListRealState;
