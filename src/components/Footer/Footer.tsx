import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./Footer.css";

type Props = RouteComponentProps<{}>;

export const Footer: FC<Props> = () => {
    return(
        <div className="footer">
            <p>Made by Jack Rogers. <a href="https://github.com/jackdrogers">Github</a></p>
        </div>
    )
}