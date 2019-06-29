import styled from 'styled-components';
import { typography, space } from 'styled-system';

const Title = styled('span')({}, typography, space);

Title.defaultProps = {
  fontSize: 3,
};

export default Title;
