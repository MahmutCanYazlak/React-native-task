import styled from 'styled-components/native';
import { GenericImagePropTypes } from './genericImagePropTypes';

export const GenericImage = styled.Image<GenericImagePropTypes>`
${props => props.width && `width: ${props.width}px;`}
${props => props.height && `height: ${props.height}px;`}
${props => props.resizeMode && `resize-mode: ${props.resizeMode};`}
${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;