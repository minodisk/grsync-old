import React, {Component, PropTypes} from 'react'
import {ListItem} from 'material-ui/lib/lists'
import Avatar from 'material-ui/lib/avatar'

export default class Dirs extends Component {
  static propTypes = {
    dir: PropTypes.object.isRequired,
    showFiles: PropTypes.func.isRequired
  }

  render () {
    const {dir} = this.props
    return (
      <ListItem
        primaryText={dir.name}
        rightAvatar={<Avatar src={dir.avatar.url}/>}
        files={dir.files}
        onTouchTap={this.handleDirTouchTap}
        />
    )
  }

  handleDirTouchTap = (e) => {
    this.props.showFiles(files)
  }
}
