import React, { FC, useEffect, useState } from "react"
import { Cards } from '../components/Cards/Cards';
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { RouteComponentProps } from "@reach/router";
import { Holiday } from "../interfaces/Holiday";
import { Filters } from "../components/Filters/Filters";
import { Hero } from "../components/Hero/Hero";
import "./index.css";

type Props = RouteComponentProps<{}>

const IndexPage: FC<Props> = () => {
	const data: Holiday[] = require('../breaks.json');

	const [filters, setFilters] = useState<string>('All');

	const updateFilters = (month: string) => {
		setFilters(month);
	}

	useEffect(() => {}, [filters])

	const holidays: Holiday[] = data.filter(o => {
		return filters === 'All' || o.title.split(' ')[1] === filters;
	});

	return (
		<div>
			<Header></Header>
			<Hero header="Jack Rogers' Break Booking" text="Find the break most suited for you." backgroundImage="https://resort2-cdn.s3.eu-west-2.amazonaws.com/resort2-images/home/coast-header.jpg"></Hero>
			<div className="main">
				<div>
					<Filters holidays={data} updateFilters={updateFilters}></Filters>
				</div>
				<Cards holidays={holidays}></Cards>
			</div>
			<Footer></Footer>
		</div>
	)
}

export default IndexPage
