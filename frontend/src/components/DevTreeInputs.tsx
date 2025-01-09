import { DevTreeLinks } from "../types";
import { Switch } from "@headlessui/react";
import { classNames } from "../utils";
import React from "react";
type DevTreInputsProps = {
  item: DevTreeLinks;
  handleInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnableLink: (socialNetwork: string) => void;
};

const DevTreeInputs = ({
  item,
  handleInputs,
  handleEnableLink,
}: DevTreInputsProps) => {
  return (
    <div className="bg-white shadow-lg p-5 flex items-center gap-3">
      <div
        className="size-12 bg-cover"
        style={{ backgroundImage: `url('social/icon_${item.name}.svg')` }}
      ></div>
      <input
        type="text"
        className="flex-1 border border-gray-100 rounded-lg"
        name={item.name}
        onChange={handleInputs}
        value={item.url}
      />
      <Switch
        checked={item.enabled}
        className={classNames(
          item.enabled ? "bg-blue-500" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        )}
        onChange={() => handleEnableLink(item.name)}
      >
        <span
          aria-hidden="true"
          className={classNames(
            item.enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </div>
  );
};

export default DevTreeInputs;
