import Header from './components/Header/Header.jsx';
import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import {EXAMPLES} from './data.js';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
function App() {
  
  let tabContent;
  const [selectedTopic, setSelectedTopic] = useState('');
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  tabContent = <p>Please select button.</p>
  if(selectedTopic) {
    tabContent =  <div id="tab-content">
    <h3>
      {EXAMPLES[selectedTopic].title}
    </h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept)=> <CoreConcept {...coreConcept}> </CoreConcept> )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=> handleSelect('jsx')}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
         {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
