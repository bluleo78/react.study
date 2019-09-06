import React from 'react';
import {Form} from 'react-bootstrap';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <Form>
        <Form.Control 
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}/>
        <Form.Check 
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange}
          label="Only show products in stock"
        />
      </Form>
    );
  }
}

export default SearchBar;
