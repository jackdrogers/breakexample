import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { Holiday } from "../interfaces/Holiday";
import { Header } from "../components/Header/Header"
import "./index.css"
import "./Holidays.css";

type Props = RouteComponentProps<{
	date: string,
}>

export const Holidays: FC<Props> = ({ date }) => {
	const data: Holiday[] = require('../breaks.json');

	const holiday: Holiday = data.filter((o: Holiday) => {
		return date === o.title.trim().replace(/\s/g, '-')
	})[0];

	return (
			<div>
				<Header></Header>
				<div className="main">
					<a href="/">back to homepage</a>
					{holiday &&
					<div>
						<h1>{holiday.title}</h1>
						<div className="content">
							<img className="content--image" src={holiday.hero.url} title={holiday.hero.alt}/>
							<div className="content--block">
								<p className="content--lead">{holiday.leadParagraph}</p>
							</div>
						</div>
						<h2>Features</h2>
						<ul className="content--features">
							{
								holiday.features.map(o => {
									return <li>{o}</li>
								})
							}
						</ul>
						<p className="content--prices">Adults go from £<span>{holiday.adultPrice}</span>!</p>
						{ holiday.family && 
                    		<p className="content--prices">Kids stay for £{holiday.childPrice} each!</p>
                		}

						<button className="content--button">Book quickly!</button>
					</div>
					}

					{!holiday &&
						<pre>not found, go <a href="/">back</a> and try again?</pre>
					}
				</div>
			</div>
	)
}