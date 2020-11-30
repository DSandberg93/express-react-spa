import React from 'react';
import { fetchApiRoot } from './requests';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      helloWorldApiResponse: null,
    };
  }

  componentDidMount() {
    fetchApiRoot().then((res) => res.json().then((data) => this.setState({ helloWorldApiResponse: data.message })));
  }

  render() {
    return (
      <div>
        {this.state.helloWorldApiResponse &&
          <div>{this.state.helloWorldApiResponse}</div>
        }
      </div>
    );
  }
}

export default App;
