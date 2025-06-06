import { useAppSelector } from "@/hooks/redux";
import ProfileActionForm from "../components/action";
import { selectAuth } from "@/store/auth";
const ProfileDeletePage = () => {
  const { user, loading } = useAppSelector(selectAuth);
  if (loading) {
    return <div className="text-center text-lg font-medium">Loading...</div>;
  }
  return <ProfileActionForm type="delete" user={user!} />;
};
export default ProfileDeletePage;
