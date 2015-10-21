import React, {Component, PropTypes} from 'react'
import {Card, CardTitle, CardMedia} from 'material-ui/lib/card'
import Paper from 'material-ui/lib/paper'

export default class Photos extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired
  }

  render () {
    const {files} = this.props
    return (
      <div>
      {files.map((file, i) =>
        <Paper
          key={i}
          style={{width:100, height:100, float:'left'}}
          >
          <img src={file.url}/>
        </Paper>
      )}
      </div>
    )
  }
}
