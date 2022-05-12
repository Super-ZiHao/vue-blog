import { useState } from 'react'
import logo from './logo.svg'
import './reset.scss';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Demo from './Demo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <One /> */}
      {/* <Two /> */}
      {/* <Three /> */}
      <Four />
      {/* <Five /> */}
      {/* <Demo /> */}
    </div>
  )
}

export default App
