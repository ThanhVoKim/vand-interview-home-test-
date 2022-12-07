import React, { useMemo, useState } from 'react';
import { formatStringDate } from 'common/utils/date';
import CountryModal from 'components/CountryModal';
import CountrySummaryItem from 'components/CountrySummaryItem';
import SpinnerLoading from 'components/SpinnerLoading';
import Summary from 'components/Summary';
import { useGetSummaryQuery } from 'redux/services/api';

const Home = () => {
	const { isFetching, data } = useGetSummaryQuery(undefined);

	const [codeSelect, setCodeSelect] = useState<string>('');

	const {
		Date: summaryDate,
		Global: globalSummary,
		Countries: countriesSummary = [],
	} = data || {};
	const countriesSorted = useMemo(() => {
		if (countriesSummary.length < 1) return countriesSummary;
		const newData = [...countriesSummary].sort((a, b) => {
			const {
				TotalConfirmed: confirmedA = 0,
				TotalDeaths: deathsA = 0,
				TotalRecovered: recoveredA = 0,
			} = a;
			const {
				TotalConfirmed: confirmedB = 0,
				TotalDeaths: deathsB = 0,
				TotalRecovered: recoveredB = 0,
			} = b;
			return (
				confirmedB - confirmedA || deathsB - deathsA || recoveredA - recoveredB
			);
		});
		return newData;
	}, [countriesSummary]);

	return (
		<div className="min-w-screen min-h-screen bg-gradient-to-b from-blue-700 to-blue-400 py-10">
			<div className="container">
				<div className="space-y-2 text-center text-white">
					<h1 className="text-3xl font-bold leading-none">Covid 19 Tracker</h1>
					<p className="text-base">
						{formatStringDate(summaryDate ? new Date(summaryDate) : new Date())}
					</p>
				</div>
				{isFetching ? (
					<SpinnerLoading />
				) : (
					<>
						<div className="mt-8">
							<Summary globalSummary={globalSummary} />
						</div>
						<div className="mt-16 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{countriesSorted?.map((country) => {
								return (
									<div
										key={country?.ID}
										onClick={() => {
											setCodeSelect(country?.CountryCode || '');
										}}
									>
										<CountrySummaryItem countrySummary={country} />
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
			{codeSelect ? (
				<CountryModal
					countryCode={codeSelect}
					isOpen={!!codeSelect}
					onClose={() => {
						setCodeSelect('');
					}}
				/>
			) : null}
		</div>
	);
};

export default Home;
