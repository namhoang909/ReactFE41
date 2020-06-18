import React, { Component } from 'react'

export default class DataBinding extends Component {
  hocVien = {
    ma: 1,
    ten: "nguyen Van A",
    anh: "https://picsum.photos/536/354",
  }

  renderImg () {
    return <img src="https://picsum.photos/536/354"></img>
  }
  // Phương thức render của react component
  render() {
    let title = 'Hello FE 41';
    return (
      <div>
        <div className="container">
          <div className="card text-left">
            <img width={100} height={100} src={this.hocVien.anh} alt="" className="car-img-top"/>
            <div className="card-body">
              <h4 className="card-tittle">{this.hocVien.ten}</h4>
            </div>
          </div>
        </div>
        <h1>{title}</h1>
        <input value={title}/>
        {/* binding phương thức  */}
        {this.renderImg()}
      </div>
    )
  }
}
