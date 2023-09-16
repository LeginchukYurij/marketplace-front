import { HEADER_HEIGHT, Z_INDEX_LEVEL2 } from "consts";
import colors from "consts/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 14px 20px;
  height: ${HEADER_HEIGHT}px;
  z-index: ${Z_INDEX_LEVEL2};
  background-color: ${colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
`;
