import { useState } from "react";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import Modal from "../components/common/Modal";
import { Foods } from "../utils/consant/Foods";

const Home = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header />

      <div className=" flex flex-wrap gap-5 p-5 justify-center items-center h-screen ">
        {Foods.map((items, index) => {
          return <Card key={index} data={items} setModal={setModal} />;
        })}
      </div>
      <div>
        {Foods.map((items, index) => {
          return (
            <Modal key={index} data={items} modal={modal} setModal={setModal} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
