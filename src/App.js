import React, { Component } from 'react';
import Landing from './components/Landing';
import Button from './components/Button';
import Item from './components/Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      showLandingPage: false,
      items: [],
    };

    this.handleIncrememt = this.handleIncrememt.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  componentWillMount() {
    this.setState({
      showLandingPage: true,
    });
  }

  handleIncrememt() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleName() {
    const name = this.nameInput.value.trim();

    if (!name || name === '') return;

    let desc = `Nope, you aren't ${name}, you're Steve.`;
    if (name.toLowerCase() === 'steve') {
      desc = 'Nope, you aren\t Steve. Steve is much cooler than you.';
    }

    this.nameInput.value = '';
    this.setState({
      items: [
        ...this.state.items,
        {
          name: desc,
        },
      ],
    })
  }

  render() {
    const {
      showLandingPage,
      count,
      items
    } = this.state;

    return (
      showLandingPage
      ? <Landing
          onClick={() => this.setState({ showLandingPage: false })}
        />
      : <div>
          <section className='p2 mb1'>
            <h1 className='p0'>Sup Chickens</h1>
            <p>Just a normal normal paragraph tag for your good good html times.</p>
            <p>A component is like a sort of <strong>template</strong> and <strong>controller</strong>.</p>
            <p>However, not everything needs to be a React Component...</p>
            <div>
              <Button
                className='mr1'
                onClick={this.handleIncrememt}
              >Increment</Button>
              <p className='h1'>{count}</p>
            </div>
          </section>
          <section className='p2 mb1'>
            <p>You can also do crazy things like add items to a list from user input.</p>
            <input
              type='text'
              className='block field mb1'
              placeholder='Name?'
              ref={ref => (this.nameInput = ref)}
            />
            <Button
              onClick={this.handleName}
            >That's my name</Button>

            <div className='mt1'>
              <ul>
                {
                  items.map((itm, i) => (
                    <Item
                      key={i}
                      desc={itm.name}
                    />
                  ))
                }
              </ul>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
