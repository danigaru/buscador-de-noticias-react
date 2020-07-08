import React, { useState } from "react";

const useSelect = (stateInicial, options) => {
  const [state, setState] = useState(stateInicial);
  const SelectNotificas = () => (
    <div className="input-field col s12">
      <select
        className="browser-default"
        onChange={(e) => setState(e.target.value)}
        value={state}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return [state, SelectNotificas];
};

export default useSelect;
