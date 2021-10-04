import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from "@reach/router"
import { Holiday } from '../../interfaces/Holiday'
type Props = RouteComponentProps<{
	holidays: Holiday[],
    updateFilters: (month: string) => void
}>;
export const Filters: FC<Props> = (props) => {
    const optionArray: string[] = ['All'];

    for(let i = 0; i < props.holidays.length; i++) {
        let holiday: Holiday = props.holidays[i];

        if(optionArray.indexOf(holiday.title.split(' ')[1]) < 0) {
            optionArray.push(holiday.title.split(' ')[1])
        }
    }

    const [option, setOption] = useState<string>(optionArray[0]);

    useEffect(() => {
        props.updateFilters(option);
    }, [option])

	return (
        <div>
            <span>Filter by month:</span>
            <select value={option} onChange={(e) => setOption(e.target.value)}>
                {optionArray.map((o) => {
                    return <option key={o} id={o} value={o}>{o}</option>
                })
                }
            </select>
        </div>
	);
}