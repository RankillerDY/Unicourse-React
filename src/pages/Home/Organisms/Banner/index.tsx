import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useFetchBannersQuery } from "../../../../features/banner";

function Banner() {
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBannersQuery();
  console.log("🚀 ~ Banner ~ data:", data);

  return (
    <>
      <div>{/* <img src={data[0].} alt="" /> */}</div>
    </>
  );
}

export default Banner;
