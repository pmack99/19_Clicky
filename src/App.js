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
     
    // let clickArray = friends.filter(friend => friend.id === id);
    // console.log({clickArray});
     
        if (this.state.clickArray.includes(id))
             this.resetGame();
             
  else {
             this.setState({
               clickArray: [...this.state.clickArray, id]
               
             })
             this.handleIncrement();
             
           }
           
        }


winGame =()=>{

  this.setState({
    curScore: 0,
    status: "You won! - Play Again",
    clickArray: []
  })
  this.handleShuffle();
}


resetGame =()=>{

     this.setState({
       curScore: 0,
       status: "Wrong answer - Play Again",
       clickArray: []
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
        topScore: 12
        
    });
    if (score === 13){
         this.winGame();
    };
    }
};
   

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

