import React, {Component} from 'react'
import './App.css';
import Navigation from './components/Navigation';
import 'tachyons';
import Logo from './components/Logo';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/* <ImageLinkForm />
        <FaceRecognition /> */}
        {/* <a target="_blank" href="https://icons8.com/icon/4cCEGzNi6Zt0/hub">Hub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
      </div>
    );
  }
}

export default App;
