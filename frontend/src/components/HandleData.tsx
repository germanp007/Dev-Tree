import { SocialNetwork, UserHandle } from "../types";

type HandleDataProps = {
  data: UserHandle;
};

const HandleData = ({ data }: HandleDataProps) => {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled
  );
  return (
    <div className="space-y-6 text-white">
      <p className="text-5xl text-center font-black">{data.handle}</p>
      {data.image && (
        <img src={data.image} className="max-w-[450px] mx-auto rounded-full" />
      )}
      <p className="text-lg text-center font-bold">{data.description}</p>
      <div className="mt-20 flex flex-col gap-6">
        {links.length ? (
          links.map((ele) => (
            <a
              className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg"
              key={ele.name}
              href={ele.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="w-12"
                src={`/social/icon_${ele.name}.svg`}
                alt="Imagen Red Social"
              />
              <p className="font-bold capitalize text-black text-lg">
                Visita mi: {ele.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-3xl text-center font-black">
            No hay enlaces en este Perfil
          </p>
        )}
      </div>
    </div>
  );
};

export default HandleData;
