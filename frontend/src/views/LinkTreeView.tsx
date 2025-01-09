import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { social } from "../data/social";
import DevTreeInputs from "../components/DevTreeInputs";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { updateProfile } from "../api/DevTreeApi";
import { User } from "../types";

const LinkTree = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const queryClient = useQueryClient();
  const user: User = queryClient.getQueryData(["user"])!;

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Perfil Actualizado correctamente");
    },
  });

  useEffect(() => {
    const updatedFromApi = devTreeLinks.map((item) => {
      const userLink = JSON.parse(user.links).find(
        (link) => link.name === item.name
      );
      if (userLink) {
        return { ...item, url: userLink.url, enabled: userLink.enabled };
      }
      return item;
    });
    console.log(devTreeLinks, "Datos desde la Api");
    console.log(JSON.parse(user.links), "USER desde la Api");
    setDevTreeLinks(updatedFromApi);
  }, []);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedLinks = devTreeLinks.map((link) =>
      link.name === name ? { ...link, url: value } : link
    );
    setDevTreeLinks(updatedLinks);
    queryClient.setQueryData(["user"], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLinks),
      };
    });
  };
  const handleEnableLink = (socialNetwork: string) => {
    const stateUpdated = devTreeLinks.map((link) => {
      if (link.name === socialNetwork) {
        if (isValidUrl(link.url)) {
          return { ...link, enabled: !link.enabled };
        } else {
          toast.error("URL No valida");
        }
      }
      return link;
    });
    setDevTreeLinks(stateUpdated);
    queryClient.setQueryData(["user"], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(stateUpdated),
      };
    });
  };
  return (
    <div className="space-y-5">
      {devTreeLinks.map((ele) => (
        <DevTreeInputs
          key={ele.name}
          item={ele}
          handleInputs={handleInputs}
          handleEnableLink={handleEnableLink}
        />
      ))}
      <button
        className="bg-cyan-400 p-2 text-lg font-bold w-full uppercase text-slate-600"
        onClick={() => mutate(user)}
      >
        Guardar Cambios
      </button>
    </div>
  );
};

export default LinkTree;
