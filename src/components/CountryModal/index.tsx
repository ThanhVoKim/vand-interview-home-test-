import { SpinIcon } from 'common/svg';
import { ICountry } from 'common/types';
import { numberFormat } from 'common/utils/number';
import ReactPortal from 'components/ReactPortal';
import { useGetCountryByCodeQuery } from 'redux/services/api';

interface ICountryModalProps {
	countryCode: string;
	isOpen?: boolean;
	onClose: () => void;
}

const CountryModal: React.FC<ICountryModalProps> = ({
	isOpen,
	onClose,
	countryCode,
}) => {
	const { data, isFetching } = useGetCountryByCodeQuery(countryCode);

	const {
		name,
		flags,
		population,
		capital = [],
		region,
		subregion,
	} = data?.[0] || {};

	if (!isOpen) return null;

	return (
		<ReactPortal>
			<div className="flex items-center justify-center fixed inset-0 p-4">
				<div
					className="absolute inset-0 z-0 bg-black bg-opacity-50 z-1"
					onClick={onClose}
				/>
				<div className="w-[500px] rounded bg-[#f8f8f8] drop-shadow-lg z-10">
					{isFetching ? (
						<div className="h-[300px] flex items-center justify-center">
							<SpinIcon className="animate-spin -ml-1 mr-3 w-7 text-primary fill-current" />{' '}
							Fetching...
						</div>
					) : (
						<>
							<div className="text-lg sm:text-3xl font-bold py-4 sm:py-7 px-5 text-center border-b border-solid border-gray-200">
								{name?.official}
							</div>
							<div className="flex items-center gap-4 py-4 sm:py-8 px-5 sm:px-7">
								<div className="flex-none">
									<img
										src={flags?.png}
										alt="country flag"
										className="block w-[100px] sm:w-[200px] object-contain"
									/>
								</div>
								<div className="flex-auto space-y-1">
									<p>Population: {numberFormat(population)}</p>
									<p>Capital: {capital?.join('/')}</p>
									<p>Region: {region}</p>
									<p>Subregion: {subregion}</p>
								</div>
							</div>
						</>
					)}

					<div className="">
						<button
							type="button"
							className="w-full text-white bg-red-500 hover:bg-red-600 px-2 sm:px-4 py-1 sm:py-3 text-lg rounded"
							onClick={onClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</ReactPortal>
	);
};

export default CountryModal;
