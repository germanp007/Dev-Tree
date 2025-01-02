import { useState } from "react";
import { social } from "../data/social";
import DevTreeInputs from "../components/DevTreeInputs";

const LinkTree = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social);
  return (
    <div className="space-y-5">
      {devTreeLinks.map((ele) => (
        <DevTreeInputs key={ele.name} item={ele} />
      ))}
    </div>
  );
};

export default LinkTree;
