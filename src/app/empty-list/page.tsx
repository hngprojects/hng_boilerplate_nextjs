import EmptyList from "../../components/common/Empty List/EmptyList";

const Page = () => {
  return (
    <div>
      <EmptyList
        image="/img.png"
        mainText="No available Jobs at the moment"
        subText="Come back later!"
      />
    </div>
  );
};
export default Page;
