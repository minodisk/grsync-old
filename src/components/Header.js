import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import CachedIcon from 'material-ui/lib/svg-icons/action/cached'

export default class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <AppBar
        title="GRSync"
        iconElementRight={<IconButton onClick={this.handleReloadClick}><CachedIcon/></IconButton>}/>
    )
  }

  handleReloadClick = () => {
    console.log('reload')
  }
}
