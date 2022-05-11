import DashboardLayout from '../../components/DashboardLayout'
import EditForm from '../../components/EditForm'

const EditUser = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl border-b px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Edit User</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8">
        <EditForm />
      </div>
    </DashboardLayout>
  )
}

export default EditUser
