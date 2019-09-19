import React from "react";
import { Card, } from "semantic-ui-react";
import axios from "axios";


class Items extends React.Component {
  state = { items: [] };

  componentDidMount() {
    const { store_id } = this.props.match.params;
    axios.get(`/api/stores/${store_id}/items`)
    .then( response => {
      this.setState({items: response.data})
    })
  }

  //renderItems() {
   // const { items, } = this.state;
   // return items.map( item => (
    
        //<>
          //<Card key={item.id} {...item}>

          //<Card/>
        //</>
     // ))
  }




export default Items; 