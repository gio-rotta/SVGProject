import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the url');
    // first grab the text from box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`)
    // seconds we're going to transition from / to /store/:store
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      //<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
