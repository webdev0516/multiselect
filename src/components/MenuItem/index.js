// Internal Dependencies
import { useEffect, useRef } from "react";
import { Button, HighLight } from "./menuitem.styled";

const MenuItem = ({ color, onClick, focus }) => {
  return (
    <Button color={color.value} onClick={() => onClick(color)} focus={focus}>
      <HighLight
        dangerouslySetInnerHTML={{__html: color.highlight}}
      />
    </Button>
  );
};

export default MenuItem;
