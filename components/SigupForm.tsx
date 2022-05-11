import AuthLayout from './AuthLayout'

const formFields = [
  {
    type: 'text',
    placeholder: 'Enter first name',
    label: 'First name',
    name: 'firstname',
    required: true,
  },
  {
    type: 'text',
    placeholder: 'Enter last name',
    label: 'Last name',
    name: 'lastname',
    required: true,
  },
  {
    type: 'email',
    placeholder: 'Enter email',
    label: 'Email',
    name: 'email',
    required: true,
  },
  {
    type: 'text',
    placeholder: 'Enter number',
    label: 'Phone Number',
    name: 'phone',
    required: true,
  },
  {
    type: 'radio',
    label: 'Male',
    name: 'male',
    required: true,
  },
  {
    type: 'radio',
    label: 'Female',
    name: 'female',
    required: true,
  },
  {
    type: 'text',
    placeholder: 'Nationality',
    label: 'Nationality',
    name: 'nationality',
    required: true,
  },
  {
    type: 'photo',
    placeholder: 'Photo',
    label: 'Photo',
    name: 'Nationality',
    required: true,
  },
  {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    name: 'password',
    required: true,
  },
  {
    type: 'password',
    placeholder: 'Password',
    label: 'Confirm Password',
    name: 'confirmPassword',
    required: true,
  },
]

export default function SignupForm() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8">
          <div>
            <form action="#" method="POST" className="space-y-6">
              <div className="py-6 sm:grid sm:grid-cols-2 sm:gap-4">
                {formFields.map((field) =>
                  field.type === 'text' ||
                  field.type === 'password' ||
                  field.type === 'email' ? (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {field.label}
                      </label>
                      <div className="mt-1">
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.name}
                          required={field.required}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  ) : field.type === 'photo' ? (
                    <div className="flex items-center">
                      <div className="mt-1 sm:col-span-2 sm:mt-0">
                        <div className="flex items-center">
                          {/* Change this svg to the actual image when you choose one */}
                          <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <label
                            htmlFor="file-upload"
                            className="hover:bg-gray-50relative ml-5 cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-indigo-600 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Change</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={field.name} className="flex items-center">
                      <input
                        id={field.name}
                        name="gender"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={field.name}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {field.label}
                      </label>
                    </div>
                  )
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
