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
    status: "",
    clicked: false
  };

  chooseFriend = id => {
    
    if (this.setState({clicked: false}));
    this.setState({clicked: true});
    this.handleIncrement();
    
    
   };

   resetGame =()=>{

     this.setState({
       curScore: 0,
       status: "Play again",
       clicked: []
     })
   }
 
   handleIncrement = () =>{
     const score = this.state.curScore +1;
     this.setState({
       curScore: score,
       status: "Correct"
    });
    if (score >= this.state.topScore){
      this.setState({ topScore: score});
    }
    if (score >= 12){
      this.setState({
        status: "You will sit on the IRON THRONE",
        topScore: this.state.topScore,
        clicked: []
    });
    
    
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
        <p> Your guess?  -  {this.state.status}</p>
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
