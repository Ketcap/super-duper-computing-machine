import { styled } from '@stitches/react';
import { selectedElement } from '../../states/main';

const DEFAULTProps

export const Element = () => {
  const CustomElement = styled(selectedElement.value, {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  });
  return <CustomElement> some element </CustomElement>
}