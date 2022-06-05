import React from 'react';
import {Navbar,Nav,Container,Dropdown} from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
  } from "react-router-dom";  
  import { Friends } from './components/Friends';
  import { Posts } from './components/Posts';
  import { Home } from './components/Home';


class Bar extends React.Component {

    render() {

        return(

            <BrowserRouter>
            <div>
            <>
                <Navbar class="navbar" >
                    <Container class="navbar">
                <Navbar.Brand className="text-white" href="#home"> Donalds Fun <br/> Games</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/friends">Friends</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/posts">Posts</Nav.Link>
                </Nav>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Games
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">My Games</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Browse Games</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">My Account</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Container>
                </Navbar>
            </>
            <div>
                <Switch>
                    <Route path="/friends" element={<Friends/>}></Route>
                    <Route path="posts" element={<Posts/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                </Switch>
            </div>
            </div>
            </BrowserRouter>
        );
    }
}

export default Bar;