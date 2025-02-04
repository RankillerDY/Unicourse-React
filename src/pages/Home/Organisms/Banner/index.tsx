import { useFetchBannersQuery } from "../../../../features/banner";
import "./styles.css";
function Banner() {
  const { data, isFetching } = useFetchBannersQuery();

  // Hiển thị loading spinner hoặc placeholder nếu dữ liệu đang được tải
  if (isFetching) {
    return <div>Loading...</div>; // Hoặc một spinner đẹp hơn
  }

  // Kiểm tra nếu không có dữ liệu
  if (!data?.data.length) {
    return <div>No banner available</div>; // Hoặc một placeholder
  }

  return (
    <>
      <div>
        <img
          src={data.data[0].img}
          alt="Unicourse banner"
          className="banner_image"
        />
      </div>
    </>
  );
}

export default Banner;
