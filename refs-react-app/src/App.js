import React from 'react';
import { CustomComponent } from './CustomComponent';

function App() {
  const appRef = React.createRef();
  console.log('[APP] appRef: ', appRef);

  return (
    <div>
      <p>This is the App component.</p>
      <CustomComponent ref={appRef} />
    </div>
  );
}

export default App;
