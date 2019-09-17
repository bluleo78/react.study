import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import AsyncApp from '../components/AsyncApp';


function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onRefreshPosts: (selectedReddit) => {
      dispatch(fetchPostsIfNeeded(selectedReddit));
    },
    onChangeSelectedReddit:(selectedReddit) => {
      dispatch(selectReddit(selectedReddit));
    },
    onClickRefresh: (selectedReddit) => {
      dispatch(invalidateReddit(selectedReddit));
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);