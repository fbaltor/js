import React from 'react';

export const CustomComponent = (props) => {
  console.log('[CustomComponent] props: ', props);
  // console.log('[CustomComponent] appRef: ', appRef);

  return (
    <div>
      <p>
        This is a simple custom component with access to the app's reference:{' '}
      </p>
    </div>
  );
};
