import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import  Navigation from './components/Navigation';
/*
 <Navigation>
          </Navigation>
*/
class App extends Component {
  constructor(){
    super();
    this.state={
      firstName:'',
      lastName:'',
      clientes:[]
    }
    this.AddCliente=this.AddCliente.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
   AddCliente(e){
     fetch('/api/cliente',{
       method:'POST',
       body:JSON.stringify(this.state),
       headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
       }
       
     }).then(res=>res.json())
     .then(data=>{console.log(data)
          M.toast({html:'tarea guardada'});
          this.setState({firstName:'',lastName:''});
          this.fetchClientes();
        }
     )
     .catch(err=>console.log(err));
     //console.log(this.state);
     e.preventDefault();
   }
   componentDidMount(){
     this.fetchClientes();
    // console.log("el componente fue montado");
   }
   fetchClientes(){
    fetch('/api/cliente')
    .then(res=>res.json())
    .then(data=>{
      
      this.setState({clientes:data});
      console.log(clientes);
    }
    );
   }
   handleChange(e){
    const {name,value}=e.target;
    this.setState({
      [name]:value
    })
    console.log(e.target.name.val);
   }
   deleteCliente(id)
   {
    // fetch('/api/cliente/${id}');
     // console.log("eliminado tarea"+ id);
   }
   editarCliente(){

   }
  render() {
  
    return (
      
      <div className="App">
      
      <nav className='light-green darken-4'>
        <div className='container'>
          <a className='brand-logo' href='/'>Datos Clientes</a>
        </div>
      </nav>
     
      <div className='container'>
        <div className='row'>
          <div class='col-s5'>
            <div className='card-conten'>
              <form onSubmit={this.AddCliente}>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input value={this.state.firstName} name="firstName"  onChange={this.handleChange} type='text'  placeholder='firstName'/>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input value={this.state.lastName} name="lastName" onChange={this.handleChange} type='text'  placeholder='lastName'/>
                  </div>
                </div>
                <button type='submit' className='btn btn-blue'>Enviar</button>
              </form>
            </div>
          </div>
          <div class='col-s7'>
            <table>
              <thead>
                <tr>
                  <th>
                    first Name
                  </th>
                  <th>
                    last Name
                  </th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.clientes.map(cliente=>{
                      return (
                        <tr key={cliente._id}><td>{cliente.firstName}</td>
                        <td>{cliente.lastName}</td>
                        <td>
                          <button onClick={()=>this.deleteCliente(cliente._id)}><i className="material-icons">delete</i>
                         
                          </button>
                          <button onClick={this.editarCliente} style={{margin:'4px'}}><i className="material-icons">edit</i>
                         
                          </button>

                        </td>
                        </tr>
                      )
                    }
                    )
                  }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      </div>
    )
  }
}
/*
class App extends Component {
  render() {
    return (
      
       <div className="App">
       
         
     
     
          
          

        

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
*/
export default App;
