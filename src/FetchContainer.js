import React from 'react';

export default class FetchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      data: null
    }
  }
  
  componentDidMount() {
    if (this.props.url) {
      fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data, isLoading: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { render } = this.props;
		return render({...this.state, ...this.props});
	}
  
};