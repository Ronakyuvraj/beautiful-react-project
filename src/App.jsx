import { useState } from "react";
import componentImg  from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic,setSelectedTopic] = useState("components")
function  handleSelect(selectedButton){
  setSelectedTopic(selectedButton);
  console.log(selectedTopic);
}
  return (
   
    <div>
    
          <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
        
          <ul>
            {CORE_CONCEPTS.map((item)=>(<CoreConcepts {...item}/>))};
            {/* <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].img}/>
            <CoreConcepts{...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts{...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2> <menu>
       
          <TabButton classname={selectedTopic === 'components'} onSelect={()=>handleSelect("components")}>
            components
          </TabButton>
          <TabButton classname={selectedTopic === 'jsx'} onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
          <TabButton classname={selectedTopic === 'props'} onSelect={()=>handleSelect("props")}>Props</TabButton>
          <TabButton classname={selectedTopic === 'state'} onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
       
          {!selectedTopic &&<p>Please select a topic</p> 
}
{selectedTopic &&
         (
             <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>{EXAMPLES[selectedTopic].code}</code>
</pre>
        </div>
      )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
