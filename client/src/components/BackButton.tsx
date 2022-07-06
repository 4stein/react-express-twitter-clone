import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const BackButton: React.FC = (): React.ReactElement => {
  // useHistory
  const history = useHistory();
  
  const handleClickBtn = () => {
    history.goBack();
  };

  return (
    <IconButton
      color="primary"
      style={{ marginRight: 20 }}
      onClick={handleClickBtn}
    >
      <ArrowBack />
    </IconButton>
  );
};

export default BackButton;
