import ethlogo from '../assets/ethlogo.png'
import { useEffect, useState } from 'react'

const Artworks = ({ artworks }) => {
  const [end, setEnd] = useState(4)
  const [count] = useState(4)

  const [nfts, setNfts] = useState([])

  const getNfts = () => {
    return artworks.slice(0, end)
  }

  useEffect(() => {
    setNfts(getNfts())
  }, [artworks, end])

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft, i) => (
            <a
              key={i}
              href={nft.url}
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{ backgroundImage: 'url(' + nft.imageURL + ')' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`Adulam NFT #${nft.id}`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`Adulam NFT collection #` + nft.id}
                  />
                  {nft.cost}
                </div>
              </div>
            </a>
          ))}
        </div>

        {artworks.length > 0 && artworks.length > nfts.length ? (
          <div className="flex flex-row justify-center items-center mx-auto mt-4">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f] p-2
              rounded-full cursor-pointer my-4"
              onClick={() => setEnd(end + count)}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Artworks
