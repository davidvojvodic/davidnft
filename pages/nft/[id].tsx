import React from 'react'
import slika from '../../assets/slika.png'
import kolaz from '../../assets/BeFunky-collage.jpg'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDropPage = () => {

    // Auth
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
    // ---

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* Left side */}
        <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
                    <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src={slika.src} alt='slika' />
                </div>
                
                <div className='space-y-2 text-center p-5'>
                    <h1 className='text-4xl font-bold text-white'>Cathedral of Football</h1>
                    <h2 className='text-xl text-gray-300'>A collection of a football stadiums, capturing the beauty and grandeur of the venues!</h2>
                </div>
            </div>
        </div>

        {/* Right side */}
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            {/* HEADER */}
            <div className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The{''} <span className='font-extrabold underline decoration-pink-600/50'>Cathedral of Football</span> NFT Market Place</h1>

                <button onClick={() => address ? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-400 px-4 text-white py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>{address ? "Sign out" : "Sign In"}</button>

            
            </div>

            <hr className='my-2 border' />

            {address && (
                <p className='text-center text-sm text-rose-400'>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>
            )}
            {/* CONTENT */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
                <img className='w-80 object-cover pb-10 lg:h-80 lg:w-96' src={kolaz.src} alt="kolaz" />
                <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Cathedral of Football | NFT Drop</h1>
                <p className='pt-2 text-xl text-green-500'>0 / 20 NFT's claimed</p>
            </div>

            {/* MINT BUTTON */}
            <button className='h-16 w-full bg-red-500 text-white rounded-full mt-10 font-bold'>
                Mint NFT
            </button>
        </div>
    </div>
  )
}

export default NFTDropPage