import React, { Component } from 'react'
import Plan from './Plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {                          
  state = {
    items: [],
    text: "" 
  }
  handleChange = e => {                             /* Func for changing the items in list*/
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {                                 /* Func for adding the items in list*/
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = id => {                              /* Func for deleting and upgrading the del items in the list*/
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== id
    })
    console.log("Newitems", items);
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-4">
            <h2 className="text-center"> 2Do's</h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9"> 
                  <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />      /* importing all the keys and ids from plan.js*/
                    })
                  }
                </ul>
               
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
