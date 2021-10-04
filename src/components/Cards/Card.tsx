import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router"
import './Card.css';
import { Holiday } from "../../interfaces/Holiday";
import { getTokenSourceMapRange } from 'typescript';

type Props = RouteComponentProps<{
    holidayInfo: Holiday,
}>;

export const Card: FC<Props> = (props) => {
    const holiday: Holiday = props.holidayInfo;

    const linkUrl: string = '/breaks/' + holiday.title.trim().replace(/\s/g, '-');

    function goto() {
        window.location.href = linkUrl;
    }

    return(
        <div className="card" onClick={goto}>
            <div className="card--image" style={{backgroundImage: `url(${holiday.hero.url})`}}></div>
            <div className="card--description">
                <h3>
                {holiday.title}
                </h3>
                <ul>
                    {
                        holiday.features.map(o => {
                            return <li>{o}</li>
                        })
                    }
                </ul>
                <p className="card--price">From only £{holiday.adultPrice}!</p>
                { holiday.family && 
                    <p className="card--price">Kids stay for £{holiday.childPrice}!</p>
                }
            </div>
            
        </div>

    );
}