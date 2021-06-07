import { useMemo } from "react";
import { gql } from "graphql-request";

import useSearchStore from "stores/search";
import useShopStore from "stores/shop";
import client from "graphql/client";

const FIND_PRODUCT = gql`
	query findProduct($by: String!) {
		products(searchTxt: $by) {
			id
			title
			price
			image
			category {
				title
			}
		}
	}
`;
function useProductSearch() {
	const [searchText, updateSearchText] = useSearchStore((state) => [
		state.searchInput,
		state.updateSearchState,
	]);
	const [updateProducts, setLoading] = useShopStore((state) => [
		state.updateProducts,
		state.setLoading,
	]);

	const shouldFetchResult = async () => {
		if (searchText) {
			try {
				setLoading(true);
				const { products } = await client.request(FIND_PRODUCT, {
					by: searchText,
				});
				updateProducts(products);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		} else {
			updateProducts([]);
		}
	};

	return useMemo(
		() => ({ searchText, updateSearchText, shouldFetchResult }),
		[searchText, updateSearchText]
	);
}

export default useProductSearch;
