import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'


export default class RestaurantList extends Component {
    constructor(props){
        super();
        this.state={
            data:false,
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        fetch("http://localhost:4001/employees", {
          method:'GET',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json '
          }
        }).then((response)=>{
            response.json().then((result) => {
                this.setState({data:result.rows})
                // console.log(result.rows);
            })
        })  
    }
    
    render() {
      const data = this.state.data;
      // console.log("result-  ", data);
      return ( 
            <div className="list">
                {
                    data ?
                    <div className="container">
                       <h1 className="text-center p-5 m-5 ">  List </h1>

                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Source Language</th>
                              <th>Target Language</th>
                              <th>Suggetion</th>
                              <th>page no.</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.map((item,i)=>
                                <tr key={i}>
                                  <td>{data[i].sentance_id}</td>
                                  <td>{data[i].source_lang}</td>
                                  <td>{data[i].target_lang}</td>
                                  <td>{data[i].sugestions}</td>
                                  <td>{data[i].page_no}</td>
                                </tr>
                              )
                            }
                           
                          </tbody>
                        </Table>
                        <div>
                          <table>
                            <thead>
                              <tr>
                                <th></th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                    </div>
                    :
                    <p>Loading...</p>
                }

                
            </div>
        )
    }   
}

   
  
    
   