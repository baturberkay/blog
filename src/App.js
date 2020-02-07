import React from 'react';
import './App.css';
import TabPanel from './Main'
import Footer from "./Footer";
import Container from "@material-ui/core/Container";
import Header from "./Header";

function App() {
  return (
    <div className="App">

        <Container maxWidth="lg">
            <Header title="BB's Blog"  />
          <TabPanel/>
        </Container>
        <Footer title="BB's Blog" description="Please feel free to contact me at any time" />
    </div>
  );
}

export default App;
