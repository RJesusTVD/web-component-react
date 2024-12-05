import { FC } from "react";

import "./Welcome.scss";
import "./Welcome2.scss";

export interface WelcomeProps {
  message?: string;
}

const Welcome: FC<WelcomeProps> = ({
  message = "Hello From Remote React Vite",
}) => {
  return (
    <div className="welcome">
      <span className="text">{message}</span>
    </div>
  );
};

export default Welcome;
