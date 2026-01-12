import { createContext, useContext, useState } from "react";
import type { Org } from "../types/org";

type OrgContextType = {
  org: Org | null;
  setOrg: (org: Org | null) => void;
};

const OrgContext = createContext<OrgContextType | null>(null);

export function OrgProvider({ children }: { children: React.ReactNode }) {
  const [org, setOrg] = useState<Org | null>(null);

  return (
    <OrgContext.Provider value={{ org, setOrg }}>
      {children}
    </OrgContext.Provider>
  );
}

export function useOrg() {
  const ctx = useContext(OrgContext);
  if (!ctx) throw new Error("useOrg must be inside OrgProvider");
  return ctx;
}
