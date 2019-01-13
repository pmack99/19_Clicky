import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";




class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    curScore: 0,
    topScore: 5,
    clicked: false
  };

  chooseFriend = id => {
    
    if (this.setState({clicked: false}));
    this.setState({clicked: true});
    this.handleIncrement();
    
    
   };
 
   handleIncrement = () =>{
     const score = this.state.curScore +1;
     this.setState({
       curScore: score
    });
    if (score >= this.state.topScore){
      this.setState({ topScore: score});
    }
    }
   
 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div class="container">
        <div class="jumbotron">
        
        <Title> Game of Thrones Clicky Game
          <br></br>
        <p>Current Score: {this.state.curScore} | Top Score: {this.state.topScore}</p>
        </Title> 
        </div>
        </div>

        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={this.chooseFriend}
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            
          />
          
        ))}
      </Wrapper>
    );
  }
}

export default App;
