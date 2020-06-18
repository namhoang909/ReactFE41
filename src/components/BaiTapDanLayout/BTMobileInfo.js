import React, { Component } from 'react'
import BTMobile_item1 from './BTMobile_item1'

export default class BTMobileInfo extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="text-center display-4">Danh Sách Sản Phẩm</h3>
          <div className="row">
            <div className="col-3">
              <BTMobile_item1 />
            </div>
            <div className="col-3">
            <BTMobile_item1 />
            </div>
            <div className="col-3">
            <BTMobile_item1 />
            </div>
            <div className="col-3">
            <BTMobile_item1 />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
