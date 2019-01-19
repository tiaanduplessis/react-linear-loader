import React, { Component } from 'react'

import styles from './styles.css'

const isNum = num => typeof num === 'number'

class LinearLoader extends Component {
  static defaultProps = {
    height: '5px',
    backgroundColor: '#cdffeb',
    color: '#009f9d',
    containerStyle: {},
    style: {}
  };

  render() {
    const {
      progress,
      height,
      backgroundColor,
      color,
      containerStyle,
      style
    } = this.props

    return (
      <div
        className={styles.container}
        style={{ height: height, backgroundColor, ...containerStyle }}
      >
        {isNum(progress) ? (
          <div
            className={styles.intermittent}
            style={{ width: `${progress}%`, backgroundColor: color, ...style }}
          />
        ) : (
          <div
            className={styles.continues}
            style={{ backgroundColor: color, ...style }}
          />
        )}
      </div>
    )
  }
}

export default LinearLoader
