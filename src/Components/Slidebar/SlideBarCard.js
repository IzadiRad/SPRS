import React from "react";
import { useSetItemsState } from "../../Providers/Providers";
import SorryPic from "../../static/sorry.svg";
import Stepper from "../Stepper";
const SlideBarCard = ({ itemData }) => {
  const setItems = useSetItemsState();
  const price = itemData.price * itemData.count;
  const delHandelClick = () => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemData.id ? { ...item, count: 0 } : item
      )
    );
  };
  return (
    <div className="slidebar-cards">
      <div className="slidebar-card">
        <div className="slidebar-imageArea">
          <img
            className={
              itemData.image != null
                ? "slidebar-cardImages"
                : "slidebar-cardImages withoutPadding"
            }
            src={itemData.image != null ? itemData.image : SorryPic}
            alt="ImgData"
          />
          <Stepper itemData={itemData} className="pluse" />
        </div>
        <div className="slidebar-bodyArea">
          <div>
            <p className="slidebar-title cardTitle noSelect">
              {itemData.title != null ? itemData.title : itemData.name}
            </p>
            <p className="slidebar-price noSelect">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="positionOfslidebar-delete">
          <div className="slidebar-delete" onClick={delHandelClick}>
            <i className="fa fa-times" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SlideBarCard);
