import { useState } from "react";
import AccountForm from "./components/AccountForm";
import AdressForm from "./components/AdressForm";
import UserForm from "./components/UserForm";
import { useMultiStepForm } from "./hooks/useMultiStepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AdressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
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
            <button type="submit" className="btn" onClick={back}>
              back
            </button>
          )}
          <button type="submit" className="btn">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
