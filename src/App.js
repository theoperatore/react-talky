import React, { Component } from 'react';
import Button from './components/Button';
import Item from './components/Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      items: [],
      inputValue: '',
    };

    this.handleIncrememt = this.handleIncrememt.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleIncrememt() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleName() {
    const { inputValue } = this.state;

    if (!inputValue || inputValue === '') return;

    let desc = `Nope, you aren't ${inputValue}, you're Steve.`;
    if (inputValue.toLowerCase() === 'steve') {
      desc = 'Nope, you aren\'t Steve. Steve is much cooler than you.';
    }

    this.setState({
      items: [
        ...this.state.items,
        {
          name: desc,
        },
      ],
      inputValue: '',
    });
  }

  handleChange(ev) {
    const name = ev.target.value.trim();
    this.setState({ inputValue: name });
  }

  render() {
    const {
      count,
      items,
      inputValue,
    } = this.state;

    return (
      <main>

        <section className='p2 mb1'>
          <h1 className='p0'>Sup Chickens</h1>
          <p>Just a normal normal paragraph tag for your good good html times.</p>
          <p>A component is like a sort of <strong>template</strong> and <strong>controller</strong>.</p>
          <p>However, not everything needs to be a React Component...</p>
          <Button
            className='mr1 block'
            onClick={this.handleIncrememt}
          >Increment</Button>
          <p className='h1'>{count}</p>
        </section>



        <section className='p2 mb1'>
          <p>No two-way data binding between a React Component and input components.</p>
          <input
            type='text'
            className='block field mb1'
            placeholder='Name?'
            value={inputValue}
            onChange={this.handleChange}
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
      </main>
    );
  }
}

export default App;
