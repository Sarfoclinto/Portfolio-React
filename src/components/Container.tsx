import type { FC, ReactNode } from "react";
import { cn } from "../utils/cn";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};
const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "max-w-[80rem] mx-auto no-scrollbar overflow-hidden px-6 pt-24",
        className
      )}
    >
      {children}
    </section>
  );
};
export default Container;
