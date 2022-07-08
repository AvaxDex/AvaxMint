export default function Stats() {
    return (
      <div className="pt-1 sm:pt-1">
        <div className="mt-20 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto ">
                <dl className="rounded-lg bg-pale-yellow shadow-lg sm:grid sm:grid-cols-2">
                  <div className="flex flex-col border-b border-teal p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-5xl leading-6 font-justanotherhand text-teal">Blockchain</dt>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Ethereum</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Binance</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Avalanche</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Polygon</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Arbitrum</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Optimism</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">Fantom</dd> 
                  </div>
                  <div className="flex flex-col border-t border-b border-teal p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-5xl leading-6 font-justanotherhand text-teal">Total Supply</dt>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">4000</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">1000</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">1000</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">1000</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">1000</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">1000</dd>
                    <dd className="order-1 text-6xl font-justanotherhand text-maastricht">1000</dd>        


                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
