import React from 'react';
import ReactDOM from 'react-dom'

const App = React.createClass({
    getInitialState : function(){
        return {
            auth : false
        }
    },

    componentDidMount: function() {
        $.get('http://127.0.0.1:8000/files/').done(function(data) {
          this.setState({data: data});
        }.bind(this));
      },
  
    render(){
        if (this.state.data) {
            var rows = [];

            for (var i=0; i < this.state.data.data.length; i++) {
                if( i == 0){
                    var active = 'active';
                    rows.push(<img src={this.state.data.data[i].path} className="active" />);
                }
                else{
                    rows.push(<img src={this.state.data.data[i].path}/>);    
                }
                
            }
          return <div>
                    {rows}
                 </div>;
        }
        
        return <div></div>
        
    }
});


export default App