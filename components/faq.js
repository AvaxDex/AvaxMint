/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is an Ominchain NFT?",
    answer:
      "Omnichain is the NFTs that can be traversed through different blockchains. Currently, it is possible to bridge NFTs between Ethereum, Avalanche, Binance Smart Chain, Arbitrum, Polygon, Optimism and Fantom.",
  },
  {
    question: "How will the project be funded??",
    answer:
      "100% of sales and royalties committed to a community wallet for the further development of Kids Story NFTs.",
  },
  {
    question: "Who can mint Kids Story NFTs?",
    answer:
      "Joining our discord community Members have been hand selected to join us inside our discord. Invite = Free Mint.",
  },  
  {
    question: "Will there be future versions?",
    answer:
      "Yes! With a long-term vision of a sustainable community, After launch of our first collection, We will reveal our plan to launch second collection, paired with utility that will benefit both collections.",
  },
  {
    question: "How much will it cost users to mint?",
    answer:
      "Mint will be completely free, members only responsible to pay gas.",
  },  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-2 sm:px-6 lg:px-8">
        <div className="max-w-1xl mx-auto divide-y-2 divide-pale-yellow divide-dashed">
          <h2 className="text-center font-justanotherhand text-6xl text-maastricht">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y-2 divide-pale-yellow divide-dashed">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start">
                        <span className="font-justanotherhand text-5xl text-maastricht">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-10 w-10 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="font-justanotherhand text-5xl text-pale-yellow">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}
