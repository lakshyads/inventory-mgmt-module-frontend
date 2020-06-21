import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const LandingPage = (props) => {
  return (
    <div>
      <div style={{ height: '20vh' }} />
      <Header as='h2' icon textAlign='center'>
        <Icon name='cogs' circular />
        <Header.Content>ABC Inventory Management Module by Lakshya Dev</Header.Content>
        <br />
        {(props.auth === null || props.auth === false) ? <Header.Content>Login to continue to dashboard</Header.Content> : ''}
      </Header>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth }
};

export default connect(mapStateToProps)(LandingPage);
