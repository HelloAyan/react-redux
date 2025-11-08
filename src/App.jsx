import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-pink-500 text-xl">hello world</div>

      <div className=" mt-4 flex items-center gap-x-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => dispatch(increment())}>Increment</button>
        <div>{count}</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

    </>
  )
}

export default App
