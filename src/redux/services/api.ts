import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICountryResponse } from 'common/types';
import { ICovidSummaryResponse } from 'common/types/Covid';

export const apiSlice = createApi({
	reducerPath: 'apiSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: '',
	}),
	tagTypes: ['Summary', 'Country'],
	endpoints: (builder) => ({
		getSummary: builder.query<ICovidSummaryResponse, undefined>({
			query: () => 'https://api.covid19api.com/summary',
			providesTags: ['Summary'],
		}),
		getCountryByCode: builder.query<ICountryResponse, string>({
			query: (code) => `https://restcountries.com/v3.1/alpha/${code}`,
			providesTags: (result, error, code) => [{ type: 'Country', code }],
		}),
	}),
});
export const { useGetSummaryQuery, useGetCountryByCodeQuery } = apiSlice;
