import React from 'react'
import Header from './components/layout/Header'
import InfoSection from './components/layout/InfoSection'

const App = () => {
  return (
    <div className="App">
      <Header />
      <InfoSection>
        we've got info
       </InfoSection>
    </div>
  );
}

export default App;
