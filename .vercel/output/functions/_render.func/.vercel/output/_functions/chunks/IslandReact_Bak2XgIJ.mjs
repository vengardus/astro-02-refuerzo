import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const IslandReact = ({ initValue = 27, children }) => {
  const [counter, setCounter] = useState(initValue);
  const handleOnClick = (value) => {
    console.log(counter);
    setCounter((prev) => prev + value);
  };
  return /* @__PURE__ */ jsxs("section", { className: "mt-3", children: [
    children,
    /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
      "Counter: ",
      counter
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-3", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-blue-700 text-gray-100 px-7 py-1", onClick: () => handleOnClick(-1), children: "-1" }),
      /* @__PURE__ */ jsx("button", { className: "bg-blue-700 text-gray-100 px-7 py-1", onClick: () => handleOnClick(1), children: "+1" })
    ] })
  ] });
};

export { IslandReact as I };
