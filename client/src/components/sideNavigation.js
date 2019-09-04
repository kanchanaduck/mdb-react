import React from 'react';
import logo from "../assets/DUCK.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" src={logo} style={{width:"80%"}}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Blank
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/API" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/API2" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="lemon" className="mr-3"/>
                        Fruits API
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/Login" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user-lock" className="mr-3"/>
                        Login
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/API3" activeClassName="activeClass">
                    <MDBListGroupItem>
                    <MDBIcon icon="award" className="mr-3"/>
                        API3
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/Firebase" activeClassName="activeClass">
                    <MDBListGroupItem>
                    <MDBIcon icon="database" className="mr-3"/>
                        Firebase
                    </MDBListGroupItem>
                </NavLink>
                {/* <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink> */}
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;