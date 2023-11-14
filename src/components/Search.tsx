function Search({ keyword, onKeywordChange }: { keyword: string, onKeywordChange: (value: string) => void }) {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
      className="block w-[300px] outline-none p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
      placeholder="Search by name"
    />
  );
}

export default Search;