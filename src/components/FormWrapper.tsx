import { ReactNode } from "react";

type FromWrapperProps = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: FromWrapperProps) => {
  return (
    <div>
      <h2 className="text-center m-0 mb-4">{title}</h2>
      <div className="grid gap-2 justify-start grid-cols-form">{children}</div>
    </div>
  );
};

export default FormWrapper;
