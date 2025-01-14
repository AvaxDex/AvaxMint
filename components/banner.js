const contents = [
  {
    id: 0,
    mindDate: '🔥Free Whitelist Mint Submit: 15-30th July🔥',
    mintDateMobile: 'Free Whitelist Mint Submit: 15-30th July',
  }
]

export default function Banner() {
  return (
    <div className="bg-pale-yellow">
      {contents.map((content) => (
      <div key={content.id} className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-0 flex-1">
            <p className="ml-1 font-justanotherhand text-4xl text-teal text-center">
              <span className="md:hidden">{content.mintDateMobile}</span>
              <span className="hidden md:inline">{content.mindDate}</span>
            </p>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}
