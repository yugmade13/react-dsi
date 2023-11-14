import { useAppDispatch } from '../app/hook.ts';
import { filterTableByColumn, filterTableByColumnAddress } from '../features/users/usersSlice.ts';

function Table({ users }: { users: UserProps[] }) {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full mt-2 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 w-12">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex justify-between items-center">
              Name
              <button name="name" onClick={(event) => dispatch(filterTableByColumn(event.currentTarget.name))}>
                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 24 24">
                  <path
                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </button>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex justify-between items-center">
              Email
              <button name="email" onClick={(event) => dispatch(filterTableByColumn(event.currentTarget.name))}>
                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 24 24">
                  <path
                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </button>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex justify-between items-center">
              Address
              <button name="address" onClick={() => dispatch(filterTableByColumnAddress())}>
                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 24 24">
                  <path
                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </button>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            <div className="flex justify-between items-center">
              Phone
              <button name="phone" onClick={(event) => dispatch(filterTableByColumn(event.currentTarget.name))}>
                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 24 24">
                  <path
                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </button>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        {users.length > 0
          ? users.map((user: UserProps, index: number) => (
            <tr key={user.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </th>
              <td className="px-6 py-4">
                {user.name}
              </td>
              <td className="px-6 py-4">
                {user.email}
              </td>
              <td className="px-6 py-4">
                <span>{user.address.street}, </span>
                <span>{user.address.suite}, </span>
                <span>{user.address.city}</span>
              </td>
              <td className="px-6 py-4">
                {user.phone}
              </td>
            </tr>
          ))
          : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="text-center" colSpan={5}>Not found</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default Table;