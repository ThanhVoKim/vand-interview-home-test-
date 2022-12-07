import { ICountryCovidSummary } from 'common/types';
import { numberFormat } from 'common/utils/number';

interface ICountrySummaryItemProps {
	countrySummary?: ICountryCovidSummary;
}

const CountrySummaryItem: React.FC<ICountrySummaryItemProps> = ({
	countrySummary,
}) => {
	const {
		TotalDeaths,
		TotalConfirmed,
		TotalRecovered,
		NewDeaths,
		NewConfirmed,
		NewRecovered,
		Country,
		CountryCode,
	} = countrySummary || {};
	return (
		<div className="card cursor-pointer transition duration-300 group hover:invert">
			<div className="card__title font-medium">{Country}</div>
			<div className="card__body spacey-0.5">
				<div className="flex justify-between items-start gap-1 text-orange-600">
					<p>New confirmed: </p>
					<p>{numberFormat(NewConfirmed)}</p>
				</div>
				<div className="flex justify-between items-start gap-1 ">
					<p>Total confirmed: </p>
					<p>{numberFormat(TotalConfirmed)}</p>
				</div>
				<div className="flex justify-between items-start gap-1 text-green-400">
					<p>New recovered: </p>
					<p>{numberFormat(NewRecovered)}</p>
				</div>
				<div className="flex justify-between items-start gap-1">
					<p>Total recovered: </p>
					<p>{numberFormat(TotalRecovered)}</p>
				</div>
				<div className="flex justify-between items-start gap-1 text-red-600">
					<p>New deaths: </p>
					<p>{numberFormat(NewDeaths)}</p>
				</div>
				<div className="flex justify-between items-start gap-1 ">
					<p>Total deaths: </p>
					<p>{numberFormat(TotalDeaths)}</p>
				</div>
			</div>
		</div>
	);
};

export default CountrySummaryItem;
