import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import AddTask from "../AddTask/AddTask";
import { IoIosCheckmarkCircle, IoMdTime, IoIosKeypad } from "react-icons/io";
import { filterDone, filterNotDone } from "../../JS/actions/tasksActions";
import { useSelector } from "react-redux";

const NavBar = ({setTest}) => {

 
  const TaskData = useSelector((state) => state.TaskReducer.TaskData);
  return (
    <div >
      <Navbar style={{backgroundColor: 'beige'}}>
        <Container>
          <Navbar.Brand href="#home">ToDo APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           
            <IoIosCheckmarkCircle
            onClick={()=>setTest('2')}
            />
            <IoMdTime onClick={()=>setTest('3')} />
            <IoIosKeypad onClick={()=>setTest('1')} />
          </Navbar.Collapse>
          <AddTask />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
