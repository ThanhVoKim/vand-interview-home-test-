export interface IGlobalCovidSummary {
	NewConfirmed?: number;
	TotalConfirmed?: number;
	NewDeaths?: number;
	TotalDeaths?: number;
	NewRecovered?: number;
	TotalRecovered?: number;
	Date?: string;
}

export interface ICountryCovidSummary {
	ID?: string;
	Country?: string;
	CountryCode?: string;
	Slug?: string;
	NewConfirmed?: number;
	TotalConfirmed?: number;
	NewDeaths?: number;
	TotalDeaths?: number;
	NewRecovered?: number;
	TotalRecovered?: number;
	Date?: string;
}

export interface ICovidSummaryResponse {
	ID?: string;
	Message?: string;
	Global?: IGlobalCovidSummary;
	Date?: string;
	Countries?: ICountryCovidSummary[];
}
