import React, { Component } from 'react';

export default class DienTichHCN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dai: '',
      rong: '',
      area: ''
    };
  }

  handleChangeDai = (e) => {
    this.setState({ dai: Number(e.target.value) });
  }

  handleChangeRong = (e) => {
    this.setState({ rong: Number(e.target.value) });
  }

  tinhDienTich = () => {
    const { dai, rong } = this.state;
    this.setState({ area: dai * rong });
  }

  render() {
    return (
      <div>
        <label>Chiều dài: </label>
        <input
          type="number"
          value={this.state.dai}
          onChange={this.handleChangeDai}
        />

        <label>Chiều rộng: </label>
        <input
          type="number"
          value={this.state.rong}
          onChange={this.handleChangeRong}
        />

        <button onClick={this.tinhDienTich}>Tính diện tích</button>

        <h3>Diện tích: {this.state.area}</h3>
      </div>
    );
  }
}
