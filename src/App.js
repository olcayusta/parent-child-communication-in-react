import {useState} from 'react';
import Greeting from "./components/Greeting";
import LogoutButton from "./components/LogoutButon";
import LoginButton from "./components/LoginButton";

/*function Example() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

class Untitled extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
    );
  }
}*/

/*class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }


    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>

        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}*/

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn ? <LogoutButton onClick={() => setLoggedIn(false)}/> :
                <LoginButton onClick={() => setLoggedIn(true)}/>}
        </div>
    );
}

export default App;
