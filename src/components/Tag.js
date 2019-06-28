import styled from 'styled-components';
import { space, borders, color, typography } from 'styled-system';

const Tag = styled('span')({}, space, borders, color, typography);

Tag.defaultProps = {
  bg: 'blue.4',
  color: 'grey.0',
  borderRadius: 6,
  py: 1,
  px: 2,
  fontSize: 1,
};

export default Tag;
