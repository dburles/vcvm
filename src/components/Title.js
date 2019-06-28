import styled from 'styled-components';
import { typography, space } from 'styled-system';

const Title = styled('span')(
  {
    fontFamily: props => props.theme.fontFamily.title,
  },
  typography,
  space,
);

Title.defaultProps = {
  fontSize: 3,
};

export default Title;
