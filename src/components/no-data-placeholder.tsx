import { ReactNode } from "react";

type NoDataPlaceholderProps = {
  children?: ReactNode;
  message: string;
};

export default function NoDataPlaceholder({
  children,
  message,
}: NoDataPlaceholderProps) {
  return (
    <div className="border-dashed border-2 rounded-md h-[500px] flex justify-center items-center flex-col gap-y-4">
      <p>{message}</p>
      {children}
    </div>
  );
}
