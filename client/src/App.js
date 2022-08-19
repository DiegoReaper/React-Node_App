import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    callAPI() {
        fetch("http://localhost:9000/getData")
            .then(res => res.json())
            .then(res => this.setState({ data: res.message }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <div style={{ width: '100%', height: '10%', backgroundColor: 'green' }}>
                    <img src={logo} className="App-logo" alt="logo" width={182} height={50} />
                </div>
                <div style={{backgroundColor: '#41b3a3',   display: 'flex', flexWrap: 'wrap'}}>
                    <div style={{ display: 'inline', float: 'left', marginLeft : '30%', border: '2px solid red', padding : '10px', marginTop : '2%'}}>
                        <h3 style={{ textAlign: 'left', padding: '20px' }}>The List of Data is as follows - </h3>
                        <ol style={{ listStyle: 'square', textAlign: 'left' }}>
                            {this.state.data.map(function (d, idx) {
                                return (
                                    <li key={idx} class="higher">The data of id = {d.id} is as follows,<br></br>
                                        <ul style={{ listStyle: 'circle', textAlign: 'left' }}>
                                            <li key={d.name} class="lower">
                                                Name - {d.name} <br></br>
                                            </li>
                                            <li key={d.username} class="lower">
                                                Username - {d.username}
                                            </li>
                                            <li key={d.email} class="lower">
                                                Email - {d.email}
                                            </li>
                                            <li key={d.address.zipcode} class="lower">
                                                Address - <br></br>
                                                <ul style={{ listStyle: 'disc', textAlign: 'left' }}>
                                                    <li key={d.address.street} class="lower1">
                                                        Street - {d.address.street}
                                                    </li>
                                                    <li key={d.address.suite} class="lower1">
                                                        Suite - {d.address.suite}
                                                    </li>
                                                    <li key={d.address.city} class="lower1">
                                                        City - {d.address.city}
                                                    </li>
                                                    <li key={d.address.zipcode} class="lower1">
                                                        Zipcode - {d.address.zipcode}
                                                    </li>
                                                    <li key={d.address.geo.lat} class="lower1">
                                                        Geo - <br></br>
                                                        <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                                                            <li key={d.address.geo.lat} class="lower2">
                                                                Lat. - {d.address.geo.lat}
                                                            </li>
                                                            <li key={d.address.geo.lng} class="lower2">
                                                                Long. - {d.address.geo.lng}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li key={d.phone} class="lower">
                                                Phone - {d.phone}
                                            </li>
                                            <li key={d.website} class="lower">
                                                Website - {d.website}
                                            </li>
                                            <li key={d.company.name} class="lower">
                                                Company - <br></br>
                                                <ul style={{ listStyle: 'disc', textAlign: 'left' }}>
                                                    <li key={d.company.name} class="lower1">
                                                        Name - {d.company.name}
                                                    </li>
                                                    <li key={d.company.catchPhrase} class="lower1">
                                                        CatchPhrase - {d.company.catchPhrase}
                                                    </li>
                                                    <li key={d.company.bs} class="lower1">
                                                        Bs - {d.company.bs}
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <br></br></li>)
                            })}
                        </ol>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
