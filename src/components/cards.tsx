
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-lg p-20 m-4 bg-gray-200 border border-gray-400">{children}</div>
  )
}

export default Card