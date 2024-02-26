export default function Search({searchQuery, setSearchQuery}) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search for breeds..."
      className="mb-4 p-2 border rounded"
    />
  )
}
