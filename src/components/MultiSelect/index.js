// External Dependencies
import { useState } from "react";

// Internal Dependencies
import Menu from "./../Menu";
import ColorItem from "../ColorItem";
import { CloseIcon, SearchIcon } from "./../Icons";
import useGetColor from "../../hooks/useGetColor";
import {
  CloseIconContainer,
  Container,
  InputContainer,
  MenuGroup,
  SearchIconContainer,
  TextInput,
  Wrapper
} from "./multiselect.styled";

const KEYS = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  TAB: 9,
  ESC: 27,
};

const MultiSelect = () => {
  const [query, setQuery] = useState("");
  const [curColors, setCurColors] = useState([]);
  const [menuDisable, setMenuDisable] = useState(false);
  const {data, loading} = useGetColor(query);
  const [curIndex, setCurIndex] = useState(-1);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setMenuDisable(false);
  };

  const isMenuEnable = () => !menuDisable && query;

  const handleCloseAll = () => {
    setCurColors([]);
    setQuery("");
  };

  const handleColorClose = (color) => {
    setCurColors(curColors.filter((colorItem) => colorItem.name !== color.name));
  };

  const resColors = data.filter(color => !curColors.find(col => col.name === color.name));

  const handleKeyDown = e => {
    switch(e.keyCode) {
      case KEYS.UP:
        e.preventDefault();
        if (!isMenuEnable())
          return;
        setCurIndex(curIndex > curColors.length ? curIndex - 1 : curColors.length);
        break;
      case KEYS.DOWN:
        e.preventDefault();
        if (!isMenuEnable())
          return;
        setCurIndex(curIndex < data.length - 1 ? (curIndex === -1 ? curColors.length :  curIndex + 1): data.length - 1);
        break;
      case KEYS.ENTER:
        e.preventDefault();
        if (isMenuEnable() && curIndex >= curColors.length) {
          setCurColors([...curColors, resColors[curIndex - curColors.length]]);
          setCurIndex(-1);
          setQuery('');
        }
        break;
      case KEYS.TAB:
        e.preventDefault();
        setCurIndex(data.length ? (curIndex + 1) % data.length : (curIndex + 1) % curColors.length);
        break;
      case KEYS.ESC:
        e.preventDefault();
        setMenuDisable(true);
        setCurIndex(-1);
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper onKeyDown={handleKeyDown}>
      <Container>
        {curColors.length === 0 && (
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        )}
        {curColors.length > 0 && (
            <MenuGroup>
                {curColors.map((color, index) => (
                    <ColorItem
                        color={color}
                        onClose={handleColorClose}
                        key={color.name}
                        focus={index === curIndex}
                    />
                ))}
            </MenuGroup>
        )}
        <InputContainer>
          <TextInput
            value={query}
            onChange={handleSearch}
            placeholder={curColors.length === 0 ? "Select..." : ""}
            disabled={curColors.length >= 3}
          />
        </InputContainer>
        <CloseIconContainer onClick={handleCloseAll}>
          <CloseIcon />
        </CloseIconContainer>
      </Container>
      {isMenuEnable() && (
        <Menu
          query={query}
          setQuery={setQuery}
          curColors={resColors}
          setCurColors={setCurColors} 
          loading={loading}
          curIndex={curIndex - curColors.length}
          setCurIndex={setCurIndex}
        />
      )}
    </Wrapper>
  );
};

export default MultiSelect;
