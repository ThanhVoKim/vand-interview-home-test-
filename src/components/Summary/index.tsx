import {
	AddCircleOutlineIcon,
	HighlightOffIcon,
	WarningIcon,
} from 'common/svg';
import { IGlobalCovidSummary } from 'common/types';
import { numberFormat } from 'common/utils/number';
import React from 'react';

interface ISummaryProps {
	globalSummary?: IGlobalCovidSummary;
}

const Summary: React.FC<ISummaryProps> = ({ globalSummary }) => {
	const {
		TotalDeaths,
		TotalConfirmed,
		TotalRecovered,
		NewDeaths,
		NewConfirmed,
		NewRecovered,
	} = globalSummary || {};
	return (
		<div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-5">
			<div className="card text-center max-w-full w-[200px]">
				<div className="card__title">Confirmed</div>
				<div className="card__body space-y-1">
					<WarningIcon
						width={40}
						className="fill-current m-auto text-orange-600"
					/>
					<p>{numberFormat(TotalConfirmed)}</p>
					<p className="text-orange-600 text-lg font-medium">
						+{numberFormat(NewConfirmed)}
					</p>
				</div>
			</div>
			<div className="card text-center max-w-full w-[200px] bg-[#f8f8f8]">
				<div className="card__title">Recovered</div>
				<div className="card__body space-y-1">
					<AddCircleOutlineIcon
						width={40}
						className="fill-current m-auto text-green-400"
					/>
					<p>{numberFormat(TotalRecovered)}</p>
					<p className="text-green-400 text-lg font-medium">
						+{numberFormat(NewRecovered)}
					</p>
				</div>
			</div>
			<div className="card text-center max-w-full w-[200px] bg-[#f8f8f8]">
				<div className="card__title">Deaths</div>
				<div className="card__body space-y-1">
					<HighlightOffIcon
						width={40}
						className="fill-current m-auto text-red-600"
					/>
					<p>{numberFormat(TotalDeaths)}</p>
					<p className="text-red-600 text-lg font-medium">
						+{numberFormat(NewDeaths)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Summary;
