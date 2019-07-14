import React, { useState } from 'react';
import RestaurantsIndex from '../restaurants/index/restaurant_index_container';

const Search = (props) => {
    const [ searchValue, setSearchValue ] = useState("");
    // debugger
    
    const handleInput = (e) => { 
        setSearchValue(e.target.value); 
    }

    const resetInputField = () => { setSearchValue("") }

    const handleSubmit = (e) => {
        // debugger
        e.preventDefault();
        props.searchRestaurants(searchValue);
        resetInputField();
        props.history.push(`/restaurants/search?search=${ searchValue }`)
        // debugger
    }
    if (props.location.pathname === "/") {
        return (
            <form className="reservation-form" >
                <section className="reservation-inputs">
                    <div className="reservation-input-container">
                        <div className="reservation-form-icon-decoration">
                            <i className="material-icons">calendar_today</i>
                        </div>
                        <input className="reservation-form-input-field" type="date" />
                    </div>
                    <div className="reservation-input-container">
                        <div className="reservation-form-icon-decoration">
                            <i className="material-icons">access_time</i>
                        </div>
                        <select className="reservation-form-input-field" >
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                            <option value="11:00 PM">11:00 PM</option>
                        </select>
                    </div>
                    <div className="reservation-input-container">
                        <div className="reservation-form-icon-decoration">
                            <i className="material-icons">person_outlined</i>
                        </div>
                        <select className="reservation-form-input-field">
                            <option value="1">1 person</option>
                            <option value="2">2 person</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                        </select>
                    </div>         
                </section>
                <div className="reservation-search-input">
                    <div className="reservation-form-icon-decoration">
                        <i className="material-icons">search</i>
                    </div>
                    <input type="text" value={searchValue} onChange={handleInput} placeholder="Manhattan" />
                </div>
                <input className="reservation-submit-input" onClick={handleSubmit} type="submit" value="Let's go" />
            </form>
        )
    } else {
        return (
            <>
                <div className="compact-search-reservation-background">
                    <form className="compact-search-reservation-form">
                        <section className="compact-reservation-inputs">
                            <div className="compact-reservation-input-container">
                                <select className="reservation-form-input-field">
                                    <option value="1">1 person</option>
                                    <option value="2">2 person</option>
                                    <option value="3">3 people</option>
                                    <option value="4">4 people</option>
                                    <option value="5">5 people</option>
                                    <option value="6">6 people</option>
                                    <option value="7">7 people</option>
                                    <option value="8">8 people</option>
                                    <option value="9">9 people</option>
                                    <option value="10">10 people</option>
                                </select>
                            </div>
                            <div className="compact-reservation-input-container">
                                <input className="reservation-form-input-field" type="date" />
                            </div>
                            <div className="compact-reservation-input-container">
                                <select className="reservation-form-input-field" >
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="11:00 PM">11:00 PM</option>
                                </select>
                            </div>
                            
                        <div className="compact-reservation-search-input">
                            <div className="reservation-form-icon-decoration">
                                <i className="material-icons grey">search</i>
                            </div>
                            <input type="text" value={searchValue} onChange={handleInput} placeholder="Location, Restaurant, or Cuisine" />
                        </div>
                        <input className="reservation-submit-input" onClick={handleSubmit} type="submit" value="Find a table" />
                        </section>
                    </form>
                </div>
                <div className="search-result-container">
                    <RestaurantsIndex />
                </div>
            </>
        )
    }
}

// class Search extends React.Component {
//     constructor(props){
//         super(props); 
//         this.state = {
//             search: ""
//         };
//         this.handleInput = this.handleInput.bind(this); 
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleInput(field) {
//         return e => {this.setState({[field]: e.target.value})}
//     }

//     handleSubmit(e) {
//         debugger
//         e.preventDefault();
//         const { history } = this.props;
//         history.push(`/restaurants/search?search=${this.state.search}`);
//     }

//     render() {
//         if (this.props.location.pathname === "/") {
//             return (
//                 <form className="reservation-form" onSubmit={this.handleSubmit}>
//                     <section className="reservation-inputs">
//                         <div className="reservation-input-container">
//                             <div className="reservation-form-icon-decoration">
//                                 <i className="material-icons">calendar_today</i>
//                             </div>
//                             <input className="reservation-form-input-field" type="date" />
//                         </div>
//                         <div className="reservation-input-container">
//                             <div className="reservation-form-icon-decoration">
//                                 <i className="material-icons">access_time</i>
//                             </div>
//                             <select className="reservation-form-input-field" >
//                                 <option value="7:00 PM">7:00 PM</option>
//                                 <option value="7:00 PM">8:00 PM</option>
//                                 <option value="7:00 PM">9:00 PM</option>
//                                 <option value="7:00 PM">10:00 PM</option>
//                                 <option value="7:00 PM">11:00 PM</option>
//                             </select>
//                         </div>
//                         <div className="reservation-input-container">
//                             <div className="reservation-form-icon-decoration">
//                                 <i className="material-icons">person_outlined</i>
//                             </div>
//                             <select className="reservation-form-input-field">
//                                 <option value="1 person">1 person</option>
//                                 <option value="2 person">2 person</option>
//                             </select>
//                         </div>
//                     </section>
//                     <div className="reservation-search-input">
//                         <div className="reservation-form-icon-decoration">
//                             <i className="material-icons">search</i>
//                         </div>
//                         <input className="reservation-search-input-field" onChange={this.handleInput('search')} value={ this.state.search } type="text" placeholder="Manhattan" />
//                     </div>
//                     <div className="reservation-submit-input">
//                         <input className="reservation-submit-input" type="submit" value="Let's go" />
//                     </div>
//                 </form>  
//             )
//         }
//     }
// }


export default Search;