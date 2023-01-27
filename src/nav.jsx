import { useState } from 'react';

const ViewOne = () => {
  return <p>View One</p>;
};

const ViewTwo = () => {
  return <p>View Two</p>;
};

const ViewThree = () => {
  return <p>View Three</p>;
};

const Stepper = () => {
  const [activeView, setActiveView] = useState(1);

  const renderView = () => {
    if (activeView === 1) {
      return <ViewOne />;
    }

    if (activeView === 2) {
      return <ViewTwo />;
    }

    return <ViewThree />;
  };

  const onViewChange = (newView) => {
    console.log({ newView });
    //if (activeView > 3) return;
    setActiveView(newView);
  };
  return (
    <div>
      <div>{renderView()}</div>
      <div>
        <button disabled={activeView === 1} onClick={() => onViewChange(activeView - 1)}>
          Back
        </button>
        <button disabled={activeView === 3} onClick={() => onViewChange(activeView + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
