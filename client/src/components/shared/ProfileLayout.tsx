import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <main className="w-full px-6 relative pt-4">
      <div className="p-6 rounded-[10px] bg-white w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default ProfileLayout;
