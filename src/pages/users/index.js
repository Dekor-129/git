import useSWR from 'swr'
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Users() {
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

    if (error) return <div>ошибка загрузки</div>
    if (isLoading) return <div>загрузка...</div>

    return (
        <>
            <ul>
                {
                    data.map((elem)=> (
                        <li key={elem.id}>{elem.name}</li>
                    ))
                }
            </ul>
            <Link href={'/'}>Home</Link>
        </>
        
    )
}
