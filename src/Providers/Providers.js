import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const ItemsCountextState = createContext();
const SetItemsCountextState = createContext();
const ReducePriceCountextState = createContext();
const SetReducePriceCountextState = createContext();
function Providers({ children }) {
  const [items, setItems] = useState([]);
  const [reducePrice, setReducePrice] = useState([]);
  console.log(reducePrice);
  useEffect(() => {
    const axiosBusinesses = () => {
      return (async () => {
        try {
          await axios.get("http://fakestoreapi.com/products").then((res) => {
            const products = res.data;
            setItems(products.map((i) => ({ ...i, count: 0 })));
          });
        } catch (error) {
          await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
              const products = res.data;
              setItems(products.map((i) => ({ ...i, count: 0 })));
            });
          console.log(error);
        }
      })();
    };
    axiosBusinesses();
  }, []);
  return (
    <ItemsCountextState.Provider value={items}>
      <SetItemsCountextState.Provider value={setItems}>
        <ReducePriceCountextState.Provider value={reducePrice}>
          <SetReducePriceCountextState.Provider value={setReducePrice}>
            {children}
          </SetReducePriceCountextState.Provider>
        </ReducePriceCountextState.Provider>
      </SetItemsCountextState.Provider>
    </ItemsCountextState.Provider>
  );
}
function useItemsState() {
  return React.useContext(ItemsCountextState);
}
function useSetItemsState() {
  return React.useContext(SetItemsCountextState);
}
function useReducePriceState() {
  return React.useContext(ReducePriceCountextState);
}
function useSetReducePriceState() {
  return React.useContext(SetReducePriceCountextState);
}
export {
  useItemsState,
  useSetItemsState,
  useReducePriceState,
  useSetReducePriceState,
};
export default Providers;
