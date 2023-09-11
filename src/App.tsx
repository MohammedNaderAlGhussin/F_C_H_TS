import { useMultiStepForm } from "./hooks/useMultiStepForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<div>One</div>, <div>two</div>]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="relative bg-[#1d1d1d] border-[1px] border-white p-[32px] m-2 rounded-md w-[400px]">
      <form onSubmit={onSubmit}>
        <div className=" absolute top-3 right-3">
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className="flex justify-end gap-3">
          {!isFirstStep && (
            <button className="btn" onClick={back}>
              back
            </button>
          )}
          <button className="btn" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
