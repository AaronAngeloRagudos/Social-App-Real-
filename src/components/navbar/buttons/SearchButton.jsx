import { Suspense, lazy } from "react";

const SearchIcon = lazy(() => import('../../common/icons/SearchIcon'));

export default function SearchButton() {

    return (
        <button
            type="button"
            title="Search Icon"
            name="Search"
        >
            <Suspense>
                <SearchIcon />
            </Suspense>
        </button>
    );
};