"use client"
import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter} from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export default function SearchNav() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const [searchDebounced] = useDebounce(search, 300)

    useEffect(() => {
        if(searchDebounced === ''){
            router.push(`/items`)
            return
        }
        router.push(`/items?search=${searchDebounced}`)
    }, [searchDebounced])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value
        setSearch(searchValue)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <nav className=' flex justify-center items-center space-x-2 bg-yellow-300 border border-gray-400 py-2'>
                <Image
                    height={50} width={60}
                    src='/next.svg'
                    alt='Logo Image'
                />
            <form
                className=' w-1/2'
                onSubmit={handleSubmit}
            >
                <div className=' flex justify-center items-center border border-gray-300 bg-white rounded-sm'>
                    <input
                        name='search'
                        value={search}
                        onChange={handleOnChange}
                        className='  w-full p-1.5'
                        type="text"
                        placeholder='Nunca dejes de buscar'
                    />
                    <button
                        className=' bg-gray-300 p-1 mr-1 cursor-pointer rounded-sm'
                    ><Search strokeWidth={1}/></button>
                </div>
            </form>
        </nav>
    )
}
