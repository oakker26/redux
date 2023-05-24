import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../stores/actionCreator";
const ZCompo = () => {
     const amount = useSelector((state) => state.account);
     const dispatch = useDispatch();
     const { add, remove } = bindActionCreators(actionCreators, dispatch);
     return <div>
          <h2>Z Compo</h2>
          <h1>{amount}</h1>
          <button onClick={()=>add(10)}>add</button>
          <button onClick={()=>remove(5)}>remove</button>

  </div>;
};

export default ZCompo;
