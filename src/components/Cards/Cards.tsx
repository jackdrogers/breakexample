import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router"
import { Card } from './Card';
import { Holiday } from '../../interfaces/Holiday'
type Props = RouteComponentProps<{
	holidays: Holiday[],
}>;
export const Cards: FC<Props> = (props) => {
	return (
		<div className="cards">
			<p>Currently {props.holidays.length} breaks available.</p>
			{
				props.holidays.map((holiday: Holiday) => {
					return (<Card holidayInfo={holiday}></Card>)
				})
			}
		</div>

	);
}