import React from 'react';
import api from '../api';
import Card from '../Components/Card';
import Table from '../Components/Table';
import Navbar from '../Components/Navbar';

class HomePage extends React.Component{


    state={

        data:undefined,
        loading: true,
        error: null

    }
    

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async ()=>{

        this.setState({loading: true, error:null });

        try{

        const data= await api.pokemon.list();
        this.setState({loading: false, data: data});

        }catch(error){
            this.setState({loading: false, error:error });  
        }
    }

render(){

    var column=[];
    const rows=[];
    var contador=0;

    if(this.state.loading === true){
        return 'Loading...'
    } 

    if(this.state.error){
        return 'Error'
    }
    
    for(var i=0; i<(this.state.data.results.length);i++ ){

        column.push(
        <Card pokemon={this.state.data.results[i].name}/>
        );

        if(contador >= 4 ){
        rows.push( <tr className="trStyle"> { column } </tr> );
            contador = 0;
            column = [];
        }else{
            contador = contador + 1;
        }
        
    }


    return (
        <>
         <Navbar/>
        <Table rows={rows}/>

        </>
    );

}
}

export default HomePage;