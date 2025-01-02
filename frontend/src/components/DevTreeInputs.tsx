import { DevTreeLinks } from "../types";

type DevTreInputsProps = {
  item: DevTreeLinks;
};

const DevTreeInputs = ({ item }: DevTreInputsProps) => {
  return (
    <div className="bg-white shadow-lg p-5 flex items-center gap-3">
      <div
        className="size-12 bg-cover"
        style={{ backgroundImage: `url('social/icon_${item.name}.svg')` }}
      ></div>
      <input type="text" className="flex-1 border border-gray-100 rounded-lg" />
    </div>
  );
};

export default DevTreeInputs;
