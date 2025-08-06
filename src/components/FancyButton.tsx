import React from "react";
import { Button } from "@carbon/react";

export const FancyButton = ({ label }: { label: string }) => {
  return <Button kind="primary">{label}</Button>;
};
