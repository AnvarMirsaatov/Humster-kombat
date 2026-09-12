import "./App.css";
import Navbar from "./component/navbar";
import Score from "./component/score";
import Main from "./component/main";
import Footer from "./component/footer";
import { useEffect, useState } from "react";

export default function App() {
  const [earnperModal, setEarnperModal] = useState(false);
  const [count, setCount] = useState(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0,
  );

  const [plusTab, setplusTab] = useState(
    localStorage.getItem("plusTab")
      ? Number(localStorage.getItem("plusTab"))
      : 1,
  );

  useEffect(() => {
    localStorage.setItem("plusTab", Number(plusTab));
    localStorage.setItem("count", Number(count));
  }, [plusTab, count]);

  return (
    <div className="min-h-screen bg-[#171a1f] p-4 sm:p-6">
      <div className="mx-auto w-full max-w-[430px] rounded-[22px] border border-[#4ab1ff] bg-[#2d3037] p-4 shadow-[0_0_0_1px_rgba(89,159,255,0.2)]">
        <Navbar />
        <Score
          setplusTab={setplusTab}
          count={count}
          setCount={setCount}
          setEarnperModal={setEarnperModal}
          earnperModal={earnperModal}
        />
        <Main count={count} setCount={setCount} plusTab={plusTab} />
        <Footer />
      </div>
    </div>
  );
}
