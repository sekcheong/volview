import Example from './Example'
function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h2 className="bs">💖 Hello From React</h2>
      </header>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <button type="button" className="btn btn-primary">
        Notifications <span className="badge text-bg-secondary">4</span>
      </button>            
      <Example/>
    </div>    
  );
}

export default App;
