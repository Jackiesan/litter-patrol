import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';
import propTypes from 'prop-types';

class Trash extends Component {

  static propTypes = {
    isTrashVisible: propTypes.bool.isRequired,
    onTrashClicked: propTypes.func.isRequired,
  }

  addPoints = () => {
    console.log(this);
    this.props.onTrashClicked();
  }

  render() {
    return (
      <div className="bin">

      {!this.props.isTrashVisible &&
        <img onClick={this.addPoints}
        src={ TrashIcon }
        alt="Trash"
        className='trash'>
        </img>}
      </div>
    );
  }
}

export default Trash;
