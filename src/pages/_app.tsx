import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function App({ children }: Props) {
  return <>{children}</>;
}
