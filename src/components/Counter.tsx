"use client";
import { increment } from "@/lib/redux/features/counter/counterSLice";
import { AppDispatch, UseAppSelector } from "@/lib/redux/store";
import { useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { count } = UseAppSelector((state) => state.counter);
  return (
    <>
      <h1>{count}</h1>
      <button className="p-1.5 rounded " onClick={() => dispatch(increment())}>
        Tambah
      </button>
    </>
  );
};

export default Counter;
