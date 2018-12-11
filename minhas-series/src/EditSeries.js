import React,{ Component } from 'react';

import api from './Api';
import { Redirect } from 'react-router-dom'


const statuses = {
    'Watched': 'Assistido',
    'Watching': 'Assistindo',
    'Towatch': 'Assistir'
}


class EditSeries extends Component {
    constructor(props){
        super(props);
        this.state = { 
          genres: [],
          isLoading: false,
          redirect: false,
          series: {}
        };

        this.saveSeries = this.saveSeries.bind(this);
    }
    
      componentDidMount(){
       this.setState({isLoading: true});
       api.loadSeriesById(this.props.match.params.id)
        .then((res) => this.setState({series: res.data})
        )

       api.loadGenres()
        .then( (res) => {
          this.setState({
            isLoading: false,
            genres: res.data
          })
    
        } );
      }
    
      renderGenreLink(genre){
        return(
          <span>&nbsp;<a href>{genre}</a>&nbsp;</span>
        )
    
      }
    
    saveSeries(){
      const newSeries = {
        name: this.refs.name.value,
        status: this.refs.status.value,
        genero: this.refs.genero.value,
        comments: this.refs.comments.value    
      }

      api.saveSeries(newSeries)
        .then( (res)=>{
         this.setState({
           redirect: '/series/' + this.refs.genero.value
         })  
        
        })  
      } 
      
    render() {
        return( 
          <section className="intro-section">
            { this.state.redirect && 
             < Redirect to = {this.state.redirect} />}
            }

            <h1>Editar Série</h1>
            <form>
                Nome:< input type='Text' ref='name' defaultvalue={this.state.series.name} className='form-control'></input><br />
                Status:
                <select ref='status'>
                    { Object.keys(statuses)
                        .map( key => <option key={key} value={key}>{statuses[key]} </option>)}
                </select> <br />
                Gêneros:
                <select ref='genero'>
                    { this.state.genres
                        .map( key => <option key={key} value={key}>{key} </option>)}
                </select> <br />           
                Comentários: <textarea ref='comments' className='form-control'></textarea><br />
                <button type='button' onClick={this.saveSeries}>Salvar</button>
            </form>
            
            
          </section> )



        

    }

}

export default EditSeries