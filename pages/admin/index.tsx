import DashboardLayout from '../../components/DashboardLayout'
import UsersTable from '../../components/UsersTable'
import { SearchIcon } from '@heroicons/react/solid'

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl border-b px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8">
        <div className="px-12 lg:px-0">
          {/* Search */}
          <div className="mx-auto w-full max-w-xs lg:max-w-md">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-black focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search"
                className="block w-full rounded-md border border-transparent bg-indigo-200 bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-white placeholder-black focus:border-transparent focus:bg-opacity-100 focus:text-black focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
        </div>
        <UsersTable />
      </div>
    </DashboardLayout>
  )
}

export default AdminDashboard
