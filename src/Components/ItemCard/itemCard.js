import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SorryPic from "../../static/sorry.svg";
import Stepper from "../Stepper";
const ItemCard = ({ itemData }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className="cards">
        <Card style={{ width: "18rem" }} className={"card"}>
          <div className="cardImageArea">
            <Card.Img
              variant="top"
              className={
                itemData.image != null
                  ? "cardImages"
                  : "cardImages withoutPadding"
              }
              src={itemData.image != null ? itemData.image : SorryPic}
              style={{ padding: "unset !important" }}
            />
            {/* <div className="pluse">{ByClick()}</div> */}
            <Stepper itemData={itemData}  />
          </div>
          <Card.Body className="cardBody">
            <Card.Title
              className="cardTitle"
              style={{ WebkitBoxOrient: "vertical" }}
            >
              {itemData.title != null ? itemData.title : itemData.name}
            </Card.Title>
            <br />
            <Card.Text style={{ fontWeight: "bolder" }}>
              $
              {itemData.price != null
                ? itemData.price
                : itemData.address.zipcode}
            </Card.Text>
            <div className="positionButton">
              <Button
                variant="primary"
                className="Btn btn right"
                onClick={() => setShowDetails(true)}
              >
                details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal
        show={showDetails}
        onHide={() => setShowDetails(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="modalBox"
      >
        <Modal.Body>
          <div className="cardImageArea modalCardImageArea">
            <Card.Img
              variant="top"
              className={"cardImages modalCardImages"}
              src={itemData.image != null ? itemData.image : SorryPic}
            />
          </div>
          <Card.Title
            className="modalCardTitle cardTitle"
            style={{ WebkitBoxOrient: "vertical" }}
          >
            {itemData.title != null ? itemData.title : itemData.name}
          </Card.Title>
          <Stepper itemData={itemData} className="pluse modalPluse" />
        </Modal.Body>
        <Modal.Header closeButton>
          <Card.Body>
            <div>Description:</div>
            <br />
            <div>
              {itemData.description != null
                ? itemData.description
                : itemData.email}
            </div>
          </Card.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};
export default ItemCard;
