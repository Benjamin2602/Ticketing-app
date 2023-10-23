import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faXmark}
      className="text-red-500 hover:cursor-pointer hover:text-red-300 text-lg"
    />
  );
};

export default DeleteBlock;
