import React from "react";
import { Button } from "../../UI/button/Button";
import styled from "styled-components";
import { Modalka } from "../modalka/Modalka";
import { Edit } from "../Edit/Edit";

export const MovieItem = ({
  modal,
  setModal,
  title,
  url,
  rating,
  removeHandler,
  id,
}) => {
  const editMovie = () => {};

  return (
    <DivCont>
      <div style={{ width: "40%" }}>
        <img
          style={{
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }}
          width="100%"
          height="100%"
          src={url}
        />
      </div>

      <div
        style={{
          width: "60%",
          backgroundColor: "darkGray",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <h2 style={{ marginLeft: "20px" }}>{title}</h2>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <PCont>{rating}/5 stars</PCont>
          <Button
            height="60px"
            width="100px"
            onClick={() => removeHandler(id)}
            backgroundColor="red"
          >
            Delete
          </Button>
          <Button
            onClick={editMovie}
            height="60px"
            width="80px"
            backgroundColor="rgb(25, 25, 163)"
          >
            Edit
          </Button>
          {modal ? <Edit /> : null}
        </div>
      </div>
    </DivCont>
  );
};

const PCont = styled.p`
  width: 80px;
  text-align: center;

  padding: 10px;
  background-color: orange;
  border-radius: 10px;
  font-weight: 600;
  color: aliceblue;
  margin-top: 25px;
`;

const DivCont = styled.div`
  border: 2px solid black;
  width: 700px;
  margin-left: 400px;
  margin-top: 30px;
  display: flex;
  height: 200px;
  border-radius: 20px;
`;
