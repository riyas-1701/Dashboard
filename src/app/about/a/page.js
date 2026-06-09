"use client";
import Cart from "../../../../components/Cart";
import { useUserContext } from "../../../../context/UserContext";
const page = () => {
    const { male } = useUserContext();
    return (
        <div>
            <h1>Male Users: {male.length}</h1>

            {/* {male.map((user) => (
                <p key={user.id}>{user.firstName} — {user.email}</p>
            ))} */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {male.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={user.image}
                                alt={user.firstName}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {user.firstName}
                                </h3>
                                <p className="text-sm text-gray-500">Male User</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm text-gray-700 break-all">
                                📧 {user.email}
                            </p>

                            <p className="text-sm text-gray-700">
                                📱 {user.phone}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
