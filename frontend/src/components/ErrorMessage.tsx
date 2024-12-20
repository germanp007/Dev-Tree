import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="bg-red-50 text-red-600 font-bold text-xs text-center py-2">
      {children}
    </p>
  );
};
