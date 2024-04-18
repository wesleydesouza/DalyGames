import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-screen-xl mx-auto px-3">{children}</div>;
};
