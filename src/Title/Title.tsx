import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};
