import React from 'react';
import {_} from 'underscore';
import CharacterView from './CharacterView';
import CharEditor from './CharEditor';
import Character from '../model/Character';
import World from '../model/World';

class App extends React.Component {

  constructor() {
    super();

    this.updateCharacter = this.updateCharacter.bind(this);
    // getInitialState
    this.state = {
      character: new Character(),
      world: new World(),
      order: {}
    };
  }

  updateCharacter() {
    const character = _.clone(this.state.character);
    this.setState({character: character});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <CharacterView viewBox={this.state.world.get('characterViewBox')}
                           character={this.state.character}
                           characterId={this.state.character.cid} />
          </div>
          <div className="col-7">
            <CharEditor character={this.state.character}
                        updateCharacter={this.updateCharacter} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;