import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import CachedIcon from 'material-ui/lib/svg-icons/action/cached'

export default class Header extends Component {
  static propTypes = {
    reload: PropTypes.func.isRequired
  }

  render (props) {
    return (
      <AppBar
        title="GRSync"
        showMenuIconButton={false}
        iconElementRight={<IconButton onTouchTap={this.onRightIconButtonTouchTap}><CachedIcon/></IconButton>}/>
    )
  }

  onRightIconButtonTouchTap = () => {
    this.props.reload()
  }
}
