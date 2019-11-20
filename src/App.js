import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
    
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }

   // this.callhandleChange = this.callhandleChange.bind(this);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters:users}));
  }

  //if we want to use this reference in functions, we need to bind it
  /*callhandleChange(e){
    this.setState({'searchField': e.target.value}); console.log(this.state.searchField);
  }*/

  callhandleChange = (e) =>{
    this.setState({'searchField': e.target.value}); console.log(this.state.searchField);
  }

  render(){

        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='Search monsters' handleChange={this.callhandleChange} />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
