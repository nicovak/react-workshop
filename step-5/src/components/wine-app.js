import React, { PropTypes } from 'react';
import { Clicker } from '../components/clicker';

const WineApp = React.createClass({

  propTypes: {
    children: PropTypes.element
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState() {
    return {
      title: ''
    };
  },

  setTitle(title) {
    this.setState({ title });
  },

  goBack() {
    this.context.router.goBack();
  },

  render () {
    return (
      <div>
        <div className="grid">
          <div className="1/2 grid__cell">
            <h3>Redux example</h3>
            <Clicker />
          </div>
        </div>
        <div className="grid">
            <div className="1/2 grid__cell">
              <h2>{this.state.title} <button type="button" onClick={this.goBack}>back</button></h2>
              {this.props.children && React.cloneElement(this.props.children, {
                setTitle: this.setTitle
              })}
            </div>
        </div>
      </div>
    );
  }
})

export default WineApp
