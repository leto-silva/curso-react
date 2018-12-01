import React, { Component} from 'react';


class Home extends Component {
    
    render() {
      return(
            <div>  
            <section id="intro" className="intro-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <h1><img src="images/logo.png" /></h1>
                    <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
                </div>
                </div>
            </div>
            </section>
            
            <section>
            { 
                //this.state.isLoading &&
                //<span>Aguarde, carregando...</span>
            }
            {
                //!this.state.isLoading &&
                //<div>
                //Ver Séries do Gênero
                //{/*this.state.genres.map(this.renderGenreLink)*/}
                //</div>

            }
            </section>
            </div>
            )
       }

}

export default Home;