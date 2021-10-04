import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./Header.css";

type Props = RouteComponentProps<{}>;

export const Header: FC<Props> = () => {
    const home = () => {
        window.location.href = '/';
    }
    return(
        <div className="header">
            <div className="header--inner">
                <div onClick={home}>
                    <h2>Welcome</h2>
                </div>
            </div>            
        </div>
    )
}