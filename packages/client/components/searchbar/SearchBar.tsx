import { useState } from "react";
import { useRouter } from "next/router";

import { Input } from "components";
import css from "./SearchBar.module.scss";

function SearchBar() {
	const router = useRouter();
	const [searchText, setSearchText] = useState(() => {
		if (Array.isArray(router.query.search)) {
			return router.query.search[0];
		} else {
			return router.query.search || "";
		}
	});

	const shouldFetchResult = () => {
		if (searchText) {
			router.query.search = searchText;
		} else {
			router.query = {};
		}
		router.push(router);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		shouldFetchResult();
	};

	const handleInputChange = ({ value }: { value: string }) => {
		setSearchText(value);
	};

	return (
		<form onSubmit={handleSubmit} className={css.searchbar}>
			<Input
				name="catelog_search"
				placeholder="Search for your plant"
				value={searchText}
				onChange={handleInputChange}
			/>
		</form>
	);
}

export default SearchBar;
