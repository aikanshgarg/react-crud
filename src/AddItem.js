import React, { Component } from 'react';

class AddItem extends Component {
   constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault(); // to stop auto-refresh of page

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = '';
    this.priceInput.value = '';
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Subscriber</h3>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
        <input placeholder="Contact No." ref={priceInput => this.priceInput = priceInput} />
        <button>Add</button>

        <hr/>
      </form>
    );
  }
}

export default AddItem;
