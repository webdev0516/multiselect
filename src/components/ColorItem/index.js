// External Dependencies
import { useEffect, useLayoutEffect, useRef } from "react";
import { CloseButton, Container, Label } from "./coloritem.styled";

// Internal Dependencies
import { RemoveIcon } from './../Icons';

const ColorItem =  ({ color, onClose, focus }) => {
    const ref = useRef();
    console.log(focus);

    const handleClose = () => {
        if (ref.current) {
            const interval = setInterval(() => {
                let opacity =  ref.current.style.opacity;
                opacity = parseFloat(opacity) - 0.2;
                ref.current.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(interval);
                    onClose(color);
                }
            }, 50);
        }  
    };
    
    useLayoutEffect(() => {
        ref.current.style.opacity = 0;
    }, [color]);

    useEffect(() => {
        if (ref.current !== null) {
            const interval = setInterval(() => {
                let opacity =  ref.current.style.opacity;
                opacity = parseFloat(opacity) + 0.2;
                ref.current.style.opacity = opacity;
                if (opacity >= 1)
                    clearInterval(interval);
            }, 50);
        }
    }, []);

    return (
        <Container color={color.value} ref={ref} focus={focus}>
            <Label>{color.name}</Label>
            <CloseButton onClick={handleClose}>
              <RemoveIcon />
            </CloseButton>
        </Container>
    );
};

export default ColorItem;