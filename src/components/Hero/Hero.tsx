import React, { FC } from 'react';
import "./Hero.css"

import { RouteComponentProps } from "@reach/router";
type Props = RouteComponentProps<{
    backgroundImage: string,
    header: string,
    text: string,
    hideOverlay: boolean
}>

export const Hero: FC<Props> = props => {
    return (
        <div className="hero">
            <div className="hero--image" style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
            {!props.hideOverlay && 
                <div className="hero--overlay"></div>
            }
            <div className="hero--text">
                {props.header && <h1>{props.header}</h1>}
                {props.text && <p>{props.text}</p>}
            </div>
        </div>
    );
}