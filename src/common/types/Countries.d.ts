export interface ICountry {
	name?: {
		common?: string;
		official?: string;
	};
	flags?: {
		png?: string;
		svg?: string;
	};
	population?: number;
	capital?: string[];
	region?: string;
	subregion?: string;
}

export type ICountryResponse = ICountry[];
