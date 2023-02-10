import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    isAuthenticated && (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
    )
  );
}
