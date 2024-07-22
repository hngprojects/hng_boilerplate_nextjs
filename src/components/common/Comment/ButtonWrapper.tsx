import { FC, ReactNode } from "react";

type ButtonWrapperProperties = {
  "data-testid": string;
  children: ReactNode;
  [key: string]: unknown; // To allow passing other props to the wrapped button
};

const ButtonWrapper: FC<ButtonWrapperProperties> = ({
  "data-testid": testId,
  children,
  ...properties
}) => {
  return (
    <div data-testid={testId} {...properties}>
      {children}
    </div>
  );
};

export default ButtonWrapper;
