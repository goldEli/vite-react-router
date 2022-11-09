import { useParams } from "react-router-dom";

const Other = () => {
  const params = useParams();
  console.log(params);
  return <div>this is other page</div>;
};
export default Other;
