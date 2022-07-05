import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Add To Do',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    if (title.trim() !== '') {
      const { addTodo } = this.props;
      addTodo(title);
    }
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form className="Add-to-do-form" onSubmit={this.handleSubmit}>
        <input className="Form-control" name="title" value={title} onChange={this.handleInputChange} />
        <button className="Btn Submit-btn" type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
