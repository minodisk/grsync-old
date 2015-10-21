import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import {fetchPhotos, showFiles} from '../actions'
import Header from '../components/Header'
import Dirs from '../components/Dirs'
import Files from '../components/Files'

class App extends Component {
  static propTypes = {
    // selectedReddit: PropTypes.string.isRequired,
    // posts: PropTypes.array.isRequired,
    // isFetching: PropTypes.bool.isRequired,
    // lastUpdated: PropTypes.number,
    mode: PropTypes.string.isRequired,
    dirs: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)

    this.props.dispatch(fetchPhotos())
  }

  componentDidMount() {
    // const { dispatch, selectedReddit } = this.props
    // dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps:', nextProps)
    // if (nextProps.selectedReddit !== this.props.selectedReddit) {
      // const { dispatch, selectedReddit } = nextProps
      // dispatch(fetchPostsIfNeeded(selectedReddit))
    // }
  }

  // handleChange(nextReddit) {
  //   // this.props.dispatch(selectReddit(nextReddit))
  // }
  //
  // handleRefreshClick(e) {
  //   e.preventDefault()
  //
  //   // const { dispatch, selectedReddit } = this.props
  //   // dispatch(invalidateReddit(selectedReddit))
  //   // dispatch(fetchPostsIfNeeded(selectedReddit))
  // }

  render() {
    // const { selectedReddit, posts, isFetching, lastUpdated } = this.props
    const {mode, dirs, files} = this.props
    return (
      <div>
        <Header
          reload={this.handleReload}
          />
        {() => {
        switch (mode) {
          case 'dirs':
            return (
              <Dirs
                dirs={dirs}
                showFiles={this.handleShowFiles}
                />
            )
          case 'files':
            return (
              <Files files={files}/>
            )
        }
        }()}
      </div>
    )
  }

  handleReload = () => {
    this.props.dispatch(fetchPhotos())
  }

  handleShowFiles = (files) => {
    this.props.dispatch(showFiles(files))
  }
}

function mapStateToProps(state) {
  const {mode, photos} = state
  const {dirs} = photos
  return {
    mode: mode || 'dirs',
    dirs
  }
}

export default connect(mapStateToProps)(App)
