export default function ComplexDashboardLayout({
  children,
  users,
  notifications,
  revenue,
  login
}: {
  children: React.ReactNode,
  users: React.ReactNode,
  notifications: React.ReactNode,
  revenue: React.ReactNode,
  login: React.ReactNode,
}) {
  const isLogin = true;
  return isLogin ? (
    <>
      <div>{children}</div>
      {users}
      {notifications}
      {revenue}
    </>
  ) : (
    login
  );
}
