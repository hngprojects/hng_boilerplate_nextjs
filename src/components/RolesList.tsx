import { useState } from 'react';
import RoleCreationModal from '~/components/modals/RoleCreationModal';
import CustomButton from '~/components/common/Button/button';

type Role = {
  id: number;
  name: string;
  description: string;
};

type Permission = {
  name: string;
  enabled: boolean;
};

// Dummy data
const rolesData: Role[] = [
  { id: 1, name: 'Guest', description: 'Read-only access' },
  { id: 2, name: 'User', description: 'Read, write, update' },
  { id: 3, name: 'Manager', description: 'Read, write, approve' },
  { id: 4, name: 'Project Lead', description: 'Manage, coordinate, oversee' },
  { id: 5, name: 'Administrator', description: 'Full access, control' },
];

const permissionsData: { [key: number]: Permission[] } = {
  1: [
    { name: 'Can view transactions', enabled: true },
    { name: 'Can view refunds', enabled: false },
    { name: 'Can log refunds', enabled: true },
  ],
  2: [
    { name: 'Can view users', enabled: true },
    { name: 'Can create users', enabled: false },
    { name: 'Can edit users', enabled: true },
    { name: 'Can blacklist/whitelist users', enabled: true },
  ],
  3: [
    { name: 'Can view users', enabled: true },
    { name: 'Can create users', enabled: true },
    { name: 'Can edit users', enabled: false },
    { name: 'Can blacklist/whitelist users', enabled: true },
  ],
  4: [
    { name: 'Can view transactions', enabled: true },
    { name: 'Can view refunds', enabled: true },
    { name: 'Can log refunds', enabled: true },
    { name: 'Can view users', enabled: true },
    { name: 'Can create users', enabled: true },
    { name: 'Can edit users', enabled: true },
    { name: 'Can blacklist/whitelist users', enabled: true },
  ],
  5: [
    { name: 'Can view transactions', enabled: true },
    { name: 'Can view refunds', enabled: true },
    { name: 'Can log refunds', enabled: true },
    { name: 'Can view users', enabled: true },
    { name: 'Can create users', enabled: true },
    { name: 'Can edit users', enabled: true },
    { name: 'Can blacklist/whitelist users', enabled: true },
  ],
};

const RolesList: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoleClick = (roleId: number) => {
    setSelectedRoleId(roleId);
    setPermissions([...permissionsData[roleId]]);
  };

  const handleToggle = (index: number) => {
    setPermissions((prev) => {
      const newPermissions = [...prev];
      newPermissions[index].enabled = !newPermissions[index].enabled;
      permissionsData[selectedRoleId!] = newPermissions;
      return newPermissions;
    });
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <CustomButton
        variant="primary"
        className="absolute right-[70px]"
        onClick={handleModalOpen}
      >
        + Create roles
      </CustomButton>

      <div className="flex">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">Roles</h2>
          <ul>
            {rolesData.map((role) => (
              <li
                key={role.id}
                className={`p-2 mb-2 cursor-pointer rounded ${
                  selectedRoleId === role.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white'
                }`}
                onClick={() => handleRoleClick(role.id)}
              >
                <div className="font-semibold">{role.name}</div>
                <div className="text-sm">{role.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 mt-12 p-4 ml-4 bg-white border-l-2 border-gray-300">
          {selectedRoleId !== null ? (
            <>
              <h2 className="mb-4 text-lg font-semibold">Permissions</h2>
              <p className="mb-4">
                See the list of permissions for this role
              </p>
              <div>
                {permissions.map((permission, index) => (
                  <div
                    key={permission.name}
                    className="flex items-center justify-between mb-4"
                  >
                    <span>{permission.name}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={permission.enabled}
                        onChange={() => handleToggle(index)}
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600"></div>
                    </label>
                  </div>
                ))}
              </div>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Save Preferences
              </button>
            </>
          ) : (
            <div className="text-center">Select a role to view permissions</div>
          )}
        </div>
      </div>
      <RoleCreationModal show={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default RolesList;
