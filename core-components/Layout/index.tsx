import React from "react";
import {FC} from "react";

export const Layout: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main>
      {children}
    </main>
 )
};