import { useState, useEffect } from "react";
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
			router.push(`/?search=${searchText}`);
		} else {
			router.push("/");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		shouldFetchResult();
	};

	const handleInputChange = ({ value }: { value: string }) => {
		setSearchText(value);
	};

	useEffect(() => {
		if (Array.isArray(router.query.search)) {
			setSearchText(router.query.search[0]);
		} else {
			setSearchText(router.query.search || "");
		}
	}, [router.query.search]);

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
