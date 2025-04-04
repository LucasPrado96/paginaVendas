import Styled from 'styled-components';
import { colorsTheme } from '../../constants';



export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  div{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2{
    color: ${colorsTheme.fontPrimaria};
  }

  span{
    
  }

  }

`;