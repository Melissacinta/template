import AddForm from '../../components/AddForm'
import DashboardLayout from '../../components/DashboardLayout'

const AddUser = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl border-b px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Add User</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8">
        <AddForm />
      </div>
    </DashboardLayout>
  )
}

export default AddUser
