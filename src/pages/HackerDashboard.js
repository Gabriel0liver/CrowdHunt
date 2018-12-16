import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class HackerDashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-2">Dashboard</h1>
        <Link to='/my-reports-open'>My open reports</Link>
        <Link to='/my-reports-closed'>My closed reports</Link>
        <Link to='/my-reports-rejected'>My rejected reports</Link>
        <Link to='/websites'>Websites</Link>
        <Link to='/'>Chats</Link>
        <Link to='/'>Leaderboards</Link>
      </div>
    )
  }
}

export default withAuth(HackerDashboard);
