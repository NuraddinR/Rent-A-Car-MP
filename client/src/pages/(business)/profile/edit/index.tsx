import { useAppSelector } from "@/hooks/redux";
import ProfileActionForm from "../components/action";
import { selectAuth } from "@/store/auth";
import { Spinner } from "@/components/shared/Spinner";
import { Navigate } from "react-router-dom";
import { paths } from "@/constants/paths";

const ProfileEditPage = () => {
  const { user, loading } = useAppSelector(selectAuth);

  if (loading) {
    return (
      <div className="flex flex-col w-full gap-1 items-center mt-32">
        <Spinner />
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to={paths.HOME} />;
  }

  return <ProfileActionForm type="update" user={user!} />;
};

export default ProfileEditPage;
