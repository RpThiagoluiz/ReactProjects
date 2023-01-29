import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover span {
    visibility: visible;
    opacity: 0.8;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  text-transform: capitalize;
  width: 100px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -50px;
  opacity: 0;
  transition: opacity 0.3s;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
