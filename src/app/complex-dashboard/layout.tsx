export default function ComplexDashboardLayout({
  children,
  users,
  notifications,
  revenue
}: {
  children: React.ReactNode,
  users: React.ReactNode,
  notifications: React.ReactNode,
  revenue: React.ReactNode,
}) {
  return (
    <>
      <div>{children}</div>
      {users}
      {notifications}
      {revenue}
    </>
  );
}
