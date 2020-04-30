import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const List = ({ children }) => <ListWrapper>{children}</ListWrapper>;

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
