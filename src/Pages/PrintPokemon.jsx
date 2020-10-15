import React from 'react';
import api from '../api';
import PrintCardPokemon from '../Components/PrintCardPokemon';
import Navbar from '../Components/Navbar';

import './styles/PrintCardPokemon.css';

class PrintPokemon extends React.Component{

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

        const data= await api.pokemon.read(this.props.match.params.name);
        this.setState({loading: false, data: data});

        }catch(error){
            this.setState({loading: false, error:error });  
        }
    }

    render(){


        if(this.state.loading === true){
            return 'Loading...'
        } 
    
        if(this.state.error){
            return 'Error'
        }
        

        
        return(
            <>
            <div className="Align">
               <Navbar/>
               <div >  <PrintCardPokemon Pokemon={this.state.data}/></div>
              
            </div>
            
            </>
            
        );
    }
}

export default PrintPokemon;