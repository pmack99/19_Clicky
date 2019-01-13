import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


function shuffleFriends(array) {
  for (let i = array.length -1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i +1));
       [array[i], array[j]] = [array[j], array[i]];

  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    curScore: 0,
    topScore: 0,
    status: "",
    clicked: false,
  };


  handleShuffle = () =>{
    let shuffled = shuffleFriends(friends);
    this.setState({friends: shuffled});
  }

  chooseFriend = id => {
    
    this.setState({clicked: true});
    this.handleIncrement();

   };

   resetGame =()=>{

     this.setState({
       curScore: 0,
       status: "Play Again",
       clicked: false,
       friends
     })
     this.handleShuffle();
   }
 
   handleIncrement = () =>{
     const score = this.state.curScore +1;
     this.render();
     this.setState({
       curScore: score,
       status: "The man who passes the sentence should swing the sword."
       
    });
    if (score >= this.state.topScore){
      this.setState({ topScore: score});
      this.handleShuffle();
      this.render();
    }
    if (score >= 12){
      this.setState({
        status: "You will sit on the IRON THRONE",
        topScore: 12,
        clicked: []
    });
    if (score === 13){
   this.resetGame();
    };
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
        <p>Current Score:  {this.state.curScore}  |  Top Score: {this.state.topScore}</p>
        <p> Your guess?  -  {this.state.status}</p>
        </Title> 
        </div>
        </div>

        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={this.chooseFriend}
            handleIncrement={this.handleIncrement}
            handleShuffle = {this.handleShuffle}
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
