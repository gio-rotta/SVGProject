import React from 'react';

class CharEditor extends React.Component {

  constructor() {
    super();
    this.renderTabs = this.renderTabs.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderRace = this.renderRace.bind(this);
    this.renderColorInput = this.renderColorInput.bind(this);
    this.renderRaceInput = this.renderRaceInput.bind(this);
    this.onRaceChanged = this.onRaceChanged.bind(this);
    this.onSkinChanged = this.onSkinChanged.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
    this.skinArray = [
      ['#e9c6af','#e1c27d','#DB9065','#A57257','#5C3836'],
      ['#FFD4D6','#B97C6D','#C8F0CC','#80968C','#666876'],
      ['#E3C69A','#DEC67D','#D1AC7B','#9E8251','#8F6531'],
      ['#E9BFBA','#E5BC9D','#E9AE99','#C78D7F','#BD7878'],
      ['#78B03A','#B29951','#A15830','#6A8051','#727D55']
    ];
    this.raceArray = ['Human','Elf','Dwarf','Hobbit','Orc'];
  }

  onValueChanged(e) {
    console.log(e.target.value)
    this.props.character.set({[e.target.id] : parseInt(e.target.value,0)/100});
    this.props.updateCharacter();
  }

  onRaceChanged(e) {
    this.props.character.set({race : parseInt(e.target.value,0)});
    this.props.updateCharacter();
  }

  onSkinChanged(e) {
    this.props.character.set({skin : parseInt(e.target.value,0)});
    this.props.updateCharacter();
  }

  renderTabs() {
      return (
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#body" role="tab">Body</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#head" role="tab">Head</a>
            </li>
          </ul>
        )
  }

  renderRace(character) {
    return (
      <div className="form-group">
        <label htmlFor="race">Race</label>
        <div className="form-inline row">
          {this.raceArray.map((race, index) => { return this.renderRaceInput(index, race)})}  
        </div>
      </div>
    )
  }

  renderRaceInput(race, raceName) {
    return (
      <div key={race} className="input-group col pr-1">
        <span className="input-group-addon">
          <input type="radio" name="race-input" value={race} checked={this.props.character.get('race') === race} 
                                                onChange={(e) => { this.onRaceChanged(e)}}/>
        </span>
          <input type="text" className="form-control" value={raceName} readOnly/>
      </div>
    )
  }

  renderColorInput(race, key, skin) {
    return (
      <div key={key} className="input-group col pr-1">
        <span className="input-group-addon">
          <input type="radio" name="skin-color" value={key} checked={this.props.character.get('skin') === key} 
                                                onChange={(e) => { this.onSkinChanged(e)}}/>
        </span>
          <input type="color" className="color-control" name="favcolor" value={skin} disabled/>
      </div>
    )
  }

  renderSkin(character) {
    return (
      <div className="form-group" role="tabpanel">
        <label>Skin color</label>
          <div className="form-inline row">
            {this.skinArray[character.get('race')].map((skin, key) => { return this.renderColorInput(character.get('race'), key, skin)})}  
          </div>
      </div>
    )
  }

  renderContent(character) {
      return (
        <div className="tab-content jumbotron">
            <div className="tab-pane active" id="body" role="tabpanel">
              {this.renderRace(character)}
              <div className="form-group">
                <label htmlFor="height">Height</label>
                <input type="range" className="form-control" id="height" defaultValue={character.get('height') * 100} onChange={(e) => { this.onValueChanged(e)}}/>
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input type="range" className="form-control" id="weight" defaultValue={character.get('weight') * 100} onChange={(e) => { this.onValueChanged(e)}}/>
              </div>
              <div className="form-group">
                <label htmlFor="strenght">Strenght</label>
                <input type="range" className="form-control" id="strenght" defaultValue={character.get('strenght') * 100} onChange={(e) => { this.onValueChanged(e)}}/>
              </div>
              {this.renderSkin(character)}
            </div>
            <div className="tab-pane" id="head" role="tabpanel">
              ..w
            </div>
          </div>
      )

  }

  render() {

    return (
        <div>
          {this.renderTabs()}
          {this.renderContent(this.props.character)}
        </div>
    )
  }
}

export default CharEditor;