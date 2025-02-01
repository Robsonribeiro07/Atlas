import { useUser } from "@clerk/nextjs";

export function useUsers() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return { user: null, isLoading: true };
  }

  if (!isSignedIn || user === null) {
    return { user: null, isLoading: false };
  }

  return { user, isLoading: false, userId: user.id };
}
