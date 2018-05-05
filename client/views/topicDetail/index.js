import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
class TopicDetail extends Component {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
  }
  componentDidMount() {

  }

  render() {
    const { match, location, history } = this.props;
    console.log(match, location, history);
    return (
      <div>this is TopicDetail</div>
    );
  }
}

export default TopicDetail;
