import React, { Component } from 'react';
import BTHeader from './BTHeader';
import BTSlider from './BTSlider';
import BTMobileInfo from './BTMobileInfo';
import BTFooter from './BTFooter';

export default class BaiTapDanLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTMobileInfo />
        <BTFooter />
      </div>
    )
  }
}
