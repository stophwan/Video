import React, { Component } from 'react' 

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: this.props.term
        }
    }

    change(term){
        this.setState({term});
    }

    render(){
        return(
            <div className="input-group mb-3">
                <input className="form-control shadow-none" 
                type="text" 
                placeholder="Search" 
                aria-label="Search" 
                aria-describedby="basic-addon2" 
                value={this.state.term}
                onChange={(event) => {this.change(event.target.value)}}/>
                <div>
                    <button className="btn btn-info" type="button"
                     onClick={ ()=> {
                         this.props.onChange(this.state.term)}
                    }>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;