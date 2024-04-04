import React from "react";
import {
  useItemsState,
  useSetItemsState,
  useSetReducePriceState,
} from "../../Providers/Providers";
const Stepper = ({ itemData }) => {
  const setItems = useSetItemsState();
  const Items = useItemsState();
  const setReducePrice = useSetReducePriceState();
  itemData.isValue = false;
  const pluseClicked = () => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemData.id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      )
    );
  };
  const subtractClicked = () => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemData.id
          ? {
              ...item,
              count: item.count - 1,
            }
          : item
      )
    );
  };

  setReducePrice(
    Items.filter((i) => i.count > 0).map((item) => item.price * item.count)
  );
  const show = () => {
    if (itemData.count > 0) {
      itemData.isValue = true;
      return (
        <div
          className={
            itemData.image != null
              ? " counterBox noSelect"
              : "counterBox  ReCounterBox"
          }
        >
          {itemData.count > 0 && (
            <div
              className="subtractCircle smallSubtractCircle noSelect"
              style={{ cursor: "pointer" }}
              onClick={subtractClicked}
            >
              -
            </div>
          )}
          <div className=" counterNumber noSelect">{itemData.count}</div>
          {itemData.count < 99 && (
            <div
              className=" pluse pluseCircle smallPluseCircle noSelect"
              style={{ cursor: "pointer" }}
              onClick={pluseClicked}
            >
              +
            </div>
          )}
        </div>
      );
    } else if (itemData.count < 1) {
      return (
        <div
          className={
            itemData.image != null
              ? "pluse pluseCircle noSelect"
              : "pluseCircle noSelect RePositionPluse"
          }
          style={{ cursor: "pointer" }}
          onClick={() => pluseClicked()}
        >
          +
        </div>
      );
    }
  };
  return show();
};

export default React.memo(Stepper);
