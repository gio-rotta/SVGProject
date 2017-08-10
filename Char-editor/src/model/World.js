import Backbone from 'backbone';

class World extends Backbone.Model {

	defaults() {
		return {
			characterViewBox: "0 -25 75 100",
	  }
  }

	initialize() {
	}
}

export default World;