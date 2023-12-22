import styled from 'styled-components/native';
import { IGenericTextPropTypes } from './genericTextPropTypes';

export const GenericText = styled.Text<IGenericTextPropTypes>`
${props => props.fontSize && `font-size: ${props.fontSize}px;`}
${props => props.marginTop && `margin-top: ${props.marginTop}px;`}
${props => props.marginRight && `margin-right: ${props.marginRight}px;`}
${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`}
${props => props.marginLeft && `margin-left: ${props.marginLeft}px;`}
${props => props.color && `color: ${props.color};`}
${props => props.textAlign && `text-align: ${props.textAlign};`}
${props => props.bold && `font-weight: bold;`}
${props => props.opacity && `opacity: ${props.opacity};`}
`;