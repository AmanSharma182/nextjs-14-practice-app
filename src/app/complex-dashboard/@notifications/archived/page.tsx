import Card from "@/components/cards";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default Notifications</Link>
    </Card>
  )
}