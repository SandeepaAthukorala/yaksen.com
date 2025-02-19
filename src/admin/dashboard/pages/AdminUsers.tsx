import React, { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    // Replace with actual API call
    const fetchUsers = async () => {
      const mockUsers: User[] = [
        { id: "1", name: "John Doe", email: "john@example.com", role: "admin" },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          role: "user",
        },
        {
          id: "3",
          name: "Alice Brown",
          email: "alice@example.com",
          role: "user",
        },
      ];
      setUsers(mockUsers);

      // Initialize selectedRoles state
      const roles: { [key: string]: string } = {};
      mockUsers.forEach((user) => {
        roles[user.id] = user.role;
      });
      setSelectedRoles(roles);
    };

    fetchUsers();
  }, []);

  const handleRoleChange = (userId: string, newRole: string) => {
    setSelectedRoles((prev) => ({ ...prev, [userId]: newRole }));

    // Optionally update the backend
    console.log(`User ID: ${userId}, New Role: ${newRole}`);
    // Uncomment below to call the backend API
    // await fetch(`/api/users/${userId}/role`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ role: newRole }),
    // });
  };

  return (
    <div className="h-screen px-[100px] py-[50px]">
      <div className="w-full h-full shadow-md flex rounded-xl overflow-hidden border-solid border border-gray-100">
        <div className="flex-[1] w-full h-full border-r border-solid border-r-gray-100 shadow-md">
          <AdminNav />
        </div>
        <div className="flex-[4] w-full h-full p-10 overflow-scroll">
          <h1 className="text-2xl font-semibold mb-5">Manage Users</h1>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-200 px-4 py-2">ID</th>
                  <th className="border border-gray-200 px-4 py-2">Name</th>
                  <th className="border border-gray-200 px-4 py-2">Email</th>
                  <th className="border border-gray-200 px-4 py-2">Role</th>
                  <th className="border border-gray-200 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">
                      {user.id}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {user.name}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {user.email}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <select
                        value={selectedRoles[user.id]}
                        onChange={(e) =>
                          handleRoleChange(user.id, e.target.value)
                        }
                        className="outline-none bg-gray-200 rounded-md px-2 py-1"
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <button className="text-red-500 hover:text-red-700 mx-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
