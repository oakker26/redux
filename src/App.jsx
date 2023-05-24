import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { bindActionCreators } from "redux";
import { actionCreators, userCreators } from "./stores/actionCreator";
import TCompoo from "./components/TCompoo";
import { useRef } from "react";
function App() {
  // const account = useSelector((state) => state.account);
  const nameRef = useRef();
  const phoneRef = useRef();
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(actionCreators, dispatch);
  const {insert,drop}=bindActionCreators(userCreators,dispatch)
  const users = useSelector((state) => state.user);
  const addUser = (e) => {
    e.preventDefault();
    let user = {
      phone: phoneRef.current.value,
      name:nameRef.current.value
    }
    insert(user);
    phoneRef.current.value = "";
    nameRef.current.value=""
  }
  return (
    <>
      {users.map((user) => <p key={user} onClick={()=>{drop(user)}}>
          {user.name}:{user.phone}
        </p>
      )}
      <button onClick={() => add(20)}>Add</button>
      <TCompoo />
      <button onClick={() => remove(20)}>Remove</button>
      <form action="" onSubmit={addUser}>
        <input type="phone" ref={phoneRef} /> <br />
        <input type="name" ref={nameRef} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
