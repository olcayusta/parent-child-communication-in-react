import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), counter: 0}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        /!*        this.setState({
                    date: new Date(),
                    counter: this.state.counter + this.props.counter
                })*!/

        this.setState((state, props) => ({
            date: new Date(),
            counter: state.counter + props.counter
        }))
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        )
    }
}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
    )
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

function UserGreeting.js(props) {
    return <h1>Hoş geldiniz!</h1>;
}

function GuestGreeting(props) {
    return <h1>Lütfen kayıt olun</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting.js />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Giriş Yap
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Çıkış Yap
        </button>
    );
}

class LoginControl extends React.Component {
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
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />

        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }

}*/

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
