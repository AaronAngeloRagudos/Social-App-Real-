export default function SearchInput() {

    return (
        <>
            <input
                type="text"
                id="search_input"
                className="search_input"
                placeholder="Search Chat Book..."
                autoComplete="off"
                aria-label="Search Input"
                onChange={async (e) => {
                    const { HandleMainPageSearch } = await import('../../../utils');
                    HandleMainPageSearch(e);
                }}
            />
        </>
    );
};