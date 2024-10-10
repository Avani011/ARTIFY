"use client";

import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import React, { ReactNode, createContext, useContext } from "react";

const AuthContext = createContext<IAuthProvider | undefined>(undefined);

export default function AuthProvider({ children }: ILayout) {
  const providerProps = {};

  return (
    <AuthContext.Provider value={providerProps}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): IAuthProvider => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
