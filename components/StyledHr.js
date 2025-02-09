import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout, shadow, border } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import tag from 'clean-tag';

const StyledHr = styled(tag.hr)`
  border: 0;
  border-top: 1px solid ${themeGet('colors.black.400')};
  margin: 0;
  height: 1px;

  ${space}
  ${layout}
  ${shadow}
  ${border}
`;

StyledHr.propTypes = {
  /** styled-system prop: accepts any css 'border-color' value or theme color */
  borderColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** accepts any css 'border-style' value */
  borderStyle: PropTypes.string,
  /** styled-system prop: accepts any css 'box-shadow' value */
  boxShadow: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** styled-system prop: accepts any css 'max-width' value */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** styled-system prop: accepts any css 'min-width' value */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /**
   * styled-system prop: adds margin & padding props
   * see: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space
   */
  space: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
};

StyledHr.defaultProps = {
  /** @ignore */
  omitProps: tag.defaultProps.omitProps.concat('borderStyle'),
};

/** @component */
export default StyledHr;
