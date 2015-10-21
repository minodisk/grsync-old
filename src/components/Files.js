import React, {Component, PropTypes} from 'react'
import {Card, CardMedia} from 'material-ui/lib/card'

export default class Photos extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired
  }

  render () {
    const {photos} = this.props
    return (
      photos.map((photos, i) =>
        <Card>
          <CardMedia>
            <img src={photo.url}/>
          </CardMedia>
        </Card>
      )
    )
  }
}
