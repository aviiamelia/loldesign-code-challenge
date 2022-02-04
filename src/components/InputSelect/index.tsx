import { Select } from "./styles";
import React, { Dispatch, SetStateAction } from "react";

interface Iregions {
  origin?: number;
  destiny?: number;
  priceByMin: number;
}
interface Inputprosp {
  regions: number[];
  ORIGIN: boolean;
  setState: Dispatch<SetStateAction<string>>;
}

const InputSelection = ({ regions, ORIGIN, setState }: Inputprosp) => {
  return ORIGIN ? (
    <Select onChange={(e) => setState(e.target.value)}>
      <option></option>
      {React.Children.toArray(regions.map((origin) => <option value={origin}>{origin}</option>))}
    </Select>
  ) : (
    <Select onChange={(e) => setState(e.target.value)}>
      <option></option>
      {React.Children.toArray(regions.map((origin) => <option value={origin}>{origin}</option>))}
    </Select>
  );
};

export default InputSelection;
