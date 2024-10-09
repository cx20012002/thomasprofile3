import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="mt-20">{children}</div>;
}
