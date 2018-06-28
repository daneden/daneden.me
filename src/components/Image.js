import React from 'react'
import Imgix from 'react-imgix'

import mdToHTML from '../utils/mdToHTML'

class Image extends React.Component {
  render() {
    const url = (
      process.env.PUBLIC_URL !== undefined &&
      process.env.NODE_ENV &&
      process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT'
    ) ? `https://dephotos.imgix.net/${this.props.src}`
      : `${process.env.PUBLIC_URL || ''}/uploads/${this.props.src}`

    const img = (
      <Imgix
        customParams={{ fm: "pjpg" }}
        fit="max"
        src={url}
      />
    )

    if(this.props.caption) {
      console.log(mdToHTML(this.props.caption))
    }

    return (
      <div className={this.props.className}>
        {img}
        {this.props.caption && (
          <figcaption className="meta">
            {mdToHTML(this.props.caption)}
          </figcaption>
        )}
      </div>
    )
  }
}

export default Image
