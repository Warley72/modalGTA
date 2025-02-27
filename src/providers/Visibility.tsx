import React, { Context, createContext, useContext, useState } from "react";
import { postMessage } from "../hooks/postMessage";

interface VisibilityProviderValue {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  username: string;
  password: string;
}

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [opened, setOpened] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  postMessage(
    "Visible",
    (payload: { opened: boolean; username: string; password: string }) => {
      setOpened(payload.opened);
      setUsername(payload.username);
      setPassword(payload.password);

      console.log("Payload recebido:", payload);
    }
  );
  return (
    <VisibilityCtx.Provider value={{ opened, setOpened, username, password }}>
      {opened && children}
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () =>
  useContext<VisibilityProviderValue>(
    VisibilityCtx as Context<VisibilityProviderValue>
  );
