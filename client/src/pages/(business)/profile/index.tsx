import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import { useAppSelector } from "@/hooks/redux";
import { selectAuth } from "@/store/auth";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user, loading } = useAppSelector(selectAuth);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-lg font-semibold animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-3xl font-semibold">Your Profile</h1>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user!.avatar || "https://via.placeholder.com/150"}
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold">{user!.name}</h2>
              <p className="text-sm text-gray-600">{user!.username}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Name</h3>
              <p className="text-gray-600">{user!.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Username</h3>
              <p className="text-gray-600">{user!.username}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <p className="text-gray-600">{user!.email}</p>
            </div>
            <Button asChild>
              <Link
                to={paths.PROFILE.EDIT}
                className="w-full mt-4 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit Profile
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
