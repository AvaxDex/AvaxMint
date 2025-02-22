import Image from 'next/image'

const people = [
  {
    name: 'Sopha',
    url: 'https://nftcalendar.io/event/kid-story',
    role: 'Marketing Manager',
    imageSrc:'/images/team/profile-1.png',
    twitterUrl: 'https://twitter.com/SreySophaPMI',
    linkedinUrl: 'https://www.linkedin.com/in/sreysopha',
  },
  {
      name: 'Hak',
	  url: 'https://www.google.com', 
      role: 'Blockchain Developer',
      imageSrc: '/images/team/profile-2.png',
      twitterUrl: 'https://twitter.com/menglianghak',
      linkedinUrl: 'https://www.linkedin.com/in/menglianghak/',
    },
    {
      name: 'Son',
      role: 'Community Manager',
      imageSrc: '/images/team/profile-3.png',
      twitterUrl: 'https://twitter.com/SonSoeurng',
      linkedinUrl: 'https://linkedin.com/in/sonsoeurngpel',
    },
    {
      name: 'Ratha',
      role: 'Designer',
      imageSrc: '/images/team/profile-4.png',
      twitterUrl: 'https://twitter.com/MonyRathaPel',
      linkedinUrl: 'https://www.linkedin.com/in/monyrathapel',
    },
    {
      name: 'NFT Calendar',
      url: 'https://nftcalendar.io/event/kid-story',
      role: 'As Seen',
      imageSrc:'/images/team/profile-5.png',
      twitterUrl: 'https://twitter.com/nftcalendar',
      linkedinUrl: 'https://www.instagram.com/nftcalendar',
    },
    {
      name: 'NFT Figure',
      url: 'https://www.nftfigure.org',
      role: 'As Seen',
      imageSrc:'/images/team/profile-6.png',
      twitterUrl: 'https://www.youtube.com/channel/UCvLy01nRiOl4bwDs_vHj0ig',
      linkedinUrl: 'https://www.instagram.com/nftfigure/',
    },
	    {
      name: 'NFT LayerZero',
      url: 'https://twitter.com/NFTLayerZero',
      role: 'As Seen',
      imageSrc:'/images/team/profile-7.png',
      twitterUrl: 'https://twitter.com/NFTLayerZero',
      linkedinUrl: 'https://twitter.com/NFTLayerZero',
    },
    {
      name: 'Omnichain NFT',
      url: 'https://twitter.com/OmnichainNFT',
      role: 'As Seen',
      imageSrc:'/images/team/profile-8.png',
      twitterUrl: 'https://twitter.com/OmnichainNFT',
      linkedinUrl: 'https://twitter.com/OmnichainNFT',
    },
  // More people...
]
  
  export default function Team() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="font-justanotherhand text-6xl text-maastricht">Meet our Partner</h2>
              <p className="mt-10 text-gray-500 font-justanotherhand text-5xl text-pale-yellow text-center ">
              A team of human with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:gap-4 sm:space-y-0 lg:grid-cols-4"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 gap-4">
                    <a href={person.url}><Image
                    className="mx-auto h-70 w-70 rounded-lg"
                    src={person.imageSrc}
                    alt=""
                    width={500}
                    height={500}
                    /></a>
                    <div className="space-y-3">
                      <div className="font-justanotherhand text-5xl">
                        <h3 className="text-pale-yellow">{person.name}</h3>
                        <p className="text-5xl text-maastricht">{person.role}</p>
                      </div>
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-pale-yellow">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-pale-yellow">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
  }
  
