import Backbone from 'backbone';

class Character extends Backbone.Model {

	defaults() {
		return {
			race: Math.floor(Math.random() * (5)),
			skin: Math.floor(Math.random() * (5)),
		  height: Math.random().toFixed(2),
		  weight: Math.random().toFixed(2),
		  strenght: Math.random().toFixed(2),
		  style: ''
	  }
  }

	initialize() {
	}
}

export default Character;