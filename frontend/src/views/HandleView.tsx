import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getUserByHandle } from "../api/DevTreeApi";
import Loader from "../components/Loader";
import HandleData from "../components/HandleData";

const HandleView = () => {
  const params = useParams();
  const handle = params.handle!;
  const { data, error, isLoading } = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ["handle", handle],
    retry: 1,
  });

  if (isLoading) return <Loader size="large" color="text-white" />;
  if (error) return <Navigate to={"/404"} />;

  if (data) return <HandleData data={data} />;
};

export default HandleView;
