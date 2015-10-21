import React, {Component, PropTypes} from 'react'
import {List} from 'material-ui/lib/lists'
import Dir from './Dir'
import Header from './Header'
import {fetchPhotos} from '../actions'

export default class Dirs extends Component {
  static propTypes = {
    dirs: PropTypes.array.isRequired,
    showFiles: PropTypes.func.isRequired
  }

  render () {
    const {dirs, showFiles} = this.props
    return (
      <div>
        <Header
          reload={this.handleReload}
          />
        <List>
          {dirs.map((dir, i) =>
            <Dir
              key={i}
              dir={dir}
              showFiles={showFiles}
              />
          )}
        </List>
      </div>
    )
  }

  handleReload = () => {
    this.props.dispatch(fetchPhotos())
  }
}
