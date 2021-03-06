import React from 'react';

class Splash extends React.Component {
  redirectToExplore() {
    this.props.history.push('/explore');
  }

  render() {
    return (
      <div className='splash-container'>
        <div className='splash-background'>
        </div>
        <div className='splash-content'>
          <h1>SKYBnB</h1>
          <div>Come stay at thousands of lodgings around the world. Or host your own.</div>
          <button onClick={ this.redirectToExplore.bind(this) }>Explore</button>
        </div>
      </div>
    );
  }
}

export default Splash;
