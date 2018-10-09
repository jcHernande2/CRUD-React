import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Navigation from './components/Navigation';
class App extends Component {
  render() {
    return (
      
       <div className="App">
       
          <Navigation>
          </Navigation>
     
     
          
          

        

    <div class="container-fluid ">
      <div class="row flex-xl-nowrap">
     
        <nav class="col-md-2  d-none d-md-block bg-light sidebar mt-5">
          <div class="sidebar-sticky">
         
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Operaciones
                </a>
              </li>
            </ul>
            
            
          </div>
        </nav>
      

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard <img src={logo} className="App-logo" alt="logo" /></h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

         
         
          <h2>Section title</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </div>
    
  
 

    );
  }
}

export default App;
