import { useSelector } from "react-redux";
import ZCompo from "./Zcompo";

const TCompoo = () => {
     const amount=useSelector(state=>state.account)
     return <div>
          <h2>Tcompo</h2>
          <div>{amount}</div>
          <h3>ZCompo</h3>
          <ZCompo/>
     </div>
};

export default TCompoo;
