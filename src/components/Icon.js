import Octicon from '@primer/octicons-react';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const Icon = styled(Octicon)({}, space, color);

Icon.defaultProps = {
  color: 'grey.5',
};

export default Icon;
