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
    clickArray: []
  };


  handleShuffle = () =>{
    let shuffled = shuffleFriends(friends);
    this.setState({friends: shuffled});
    this.render();
  }


  chooseFriend = id => {
    console.log({ id });

      const clickedMatch = friends.filter(friend => friend.id === id);

      if (clickedMatch)
        this.resetGame();
      else {
        this.setState({
          clickArray: [...this.state.clickArray, id]
        })
      }
   }

   };



  

  

//    chooseFriend = id => {
//     if (! this.state.clicked) {
//       this.setState({ clicked: this.state.clicked.id });
//        this.handleIncrement();
//     } else {
      
//       this.resetGame();
//     }
//  };

winGame =()=>{

  this.setState({
    curScore: 0,
    status: "You won! - Play Again"
  })
  this.handleShuffle();
}


resetGame =()=>{

     this.setState({
       curScore: 0,
       status: "Wrong answer - Play Again"
     })
     this.handleShuffle();
   }
 
handleIncrement = () =>{
     const score = this.state.curScore +1;
     this.setState({
       curScore: score
       
    });
    if (score >= this.state.topScore){
      this.setState({ topScore: score});
      this.handleShuffle();
    }
    if (score >= 12){
      this.setState({
        status: "You will sit on the IRON THRONE",
        topScore: 12,
        clicked: false
    });
    if (score === 13){
         this.winGame();
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
        <p>  {this.state.status} </p>
        </Title>   </div>
        </div>
      

        {this.state.friends.map(friend => (
          <FriendCard
            chooseFriend={() => this.chooseFriend(friend.id)}
            handleIncrement={this.handleIncrement}
            handleShuffle = {this.handleShuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
          
        ))}
      
      </Wrapper>
    );
  }
}

export default App;
