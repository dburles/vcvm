import styled from 'styled-components';
import { space } from 'styled-system';

const Divider = styled.div`
  ${space}
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.grey[2]};
`;

export default Divider;
