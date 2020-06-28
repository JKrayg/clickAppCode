import React from 'react';
import './App.css';
import gang from "./gang.json"
import TheGang from "./components/TheGang"
import Header from "./components/Header"
import Instructions from "./components/Instructions"
import Shuffle from "shuffle-array"

class App extends React.Component {
  state = {
    gang,
    score: 0,
    streak: 0,
    answer: true
  }


clickGangMember = (id) => {
  Shuffle(this.state.gang)
  this.setState({ gang: this.state.gang.map(member => {
    if(member.id === id) {
      if (member.clicked === true) {
        this.state.gang.map(member => {
          return member.clicked = false;
        })
        this.setState({
          answer: "Failure!",
          score: 0
        });
        
      } else {
        const newStreak = this.state.streak;
        console.log(newStreak)
        member.clicked = true
        if (newStreak === this.state.score) {
          this.setState({
            answer: "Perfect!",
            score: this.state.score + 1,
            streak: this.state.score + 1
            
          });
          if (newStreak === 8) {
            this.state.gang.map(member => {
              return member.clicked = false;
            })
            this.setState({
              answer: "WINNER!",
              score: 0,
              streak: 0
              
            });
          }
        } else {
          this.setState({
            answer: "Perfect!",
            score: this.state.score + 1
            
          });
        }
        
          
      }
    }
    console.log(member)
    return member
  })
  });
}

render() {
  return (
    <React.Fragment>
      <div className = "container">
        <Header 
          score = { this.state.score }
          streak = { this.state.streak }
          answer = {this.state.answer } 
        />
        {this.state.gang.map(member => (
        <TheGang
          clickGangMember={this.clickGangMember}
          id={member.id}
          key={member.id}
          name={member.name}
          image={member.image}
          clicked={member.clicked}
        />
        ))}
        
      </div>
      
      <Instructions />
    </React.Fragment>
    
    
  );
}
};
export default App;
