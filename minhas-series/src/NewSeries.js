import React,{ Component } from 'react';

import api from './Api';


const statuses = {
    'Watched': 'Assistido',
    'Watching': 'Assistindo',
    'Towatch': 'Assistir'
}


class NewSeries extends Component {
    constructor(props){
        super(props);
        this.state = { 
          genres: [],
          isLoading: false
        };
      }
    
      componentDidMount(){
       this.setState({isLoading: true});
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

    render() {
        return( 
          <section className="intro-section">
            <h1>Nova Série</h1>
            <form>
                Nome:< input type='Text' className='form-control'></input><br />
                Status:
                <select >
                    { Object.keys(statuses)
                        .map( key => <option key={key} value={key}>{statuses[key]} </option>)}
                </select> <br />
                Gêneros:
                <select >
                    { this.state.genres
                        .map( key => <option key={key} value={key}>{key} </option>)}
                </select> <br />           
                Comentários: <textarea className='form-control'></textarea><br />
                <button>Salvar</button>
            </form>
            
            
          </section> )



        

    }

}

export default NewSeries