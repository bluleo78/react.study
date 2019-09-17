import React from 'react';
import PropTypes from 'prop-types';
import Picker from './Picker';
import Posts from './Posts';

class AsyncApp extends React.Component {

  componentDidMount() {
    this.props.onRefreshPosts(this.props.selectedReddit);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      this.props.onRefreshPosts(nextProps.selectedReddit);
    }
  }

  handleClickRefresh(e) {
    e.preventDefault();

    this.props.onClickRefresh(this.props.selectedReddit);
  }

  render () {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker value={selectedReddit}
                onChange={(nextReddit) => this.props.onChangeSelectedReddit(nextReddit)}
                options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href='#'
               onClick={(e) => this.handleClickRefresh(e)}>
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  onRefreshPosts: PropTypes.func.isRequired,
  onChangeSelectedReddit: PropTypes.func.isRequired,
  onClickRefresh: PropTypes.func.isRequired
};

export default AsyncApp;