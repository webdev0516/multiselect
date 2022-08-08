// Internal Dependencies
import Spinner from "../Spinner";
import MenuItem from "../MenuItem";
import {
  Container,
  MenuGroup,
  NoResult,
  SpinnerContainer
} from "./menu.styled";

const Menu = ({ query, setQuery, curColors, setCurColors, loading, curIndex, setCurIndex }) => {
  const onChoose = (colorItem) => {
    setQuery("");
    setCurColors(colors => [...colors, colorItem]);
    setCurIndex(-1);
  };
  
  return (
    <Container>
      {loading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {!loading && curColors.length > 0 && (
        <MenuGroup>
          {curColors.map((colorItem, index) => {
            return (
              <MenuItem
                key={colorItem.name}
                color={colorItem}
                onClick={() => onChoose(colorItem)}
                focus={index === curIndex}
              />
            );
          })}
        </MenuGroup>
      )}
      {!loading && query.length > 0 && curColors.length === 0 && (
        <NoResult>No Results</NoResult>
      )}
    </Container>
  );
};

export default Menu;
